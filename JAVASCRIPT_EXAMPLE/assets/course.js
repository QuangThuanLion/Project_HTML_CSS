    var courseApi = 'http://localhost:3000/course';

    function start() {
        getCourse(renderCourses);
        handleCreateForm();
    }

    start();

    function getCourse(callBack) {
        fetch(courseApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                callBack(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function createCourses(data, callBack) {
        var options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(courseApi, options)
            .then(function(response) {
                return response.json();
            })
            .then((data) => {
                callBack(data);
            })
            .catch((error) => console.log(error));

    }

    function handleDeleteCourse(idCourse) {
        var options = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${courseApi}/${idCourse}`, options)
            .then(function(response) {
                return response.json();
            })
            .then(function() {
                var elementCourse = document.querySelector(`li[data-id="course-item-${idCourse}"]`);
                var form_update = document.forms['form-update-' + idCourse];
                elementCourse.remove();
                form_update.remove();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function handleUpdateCourse(idCourse) {
        var options = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(courseApi + '/' + idCourse, options)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { name, desciption, author, publishDate } = data;
                var form_update_check = document.querySelectorAll('.form-update');
                var form_update = document.forms['form-update-' + idCourse];

                form_update_check.forEach(function(form, index) {
                    var btnClose = form.previousElementSibling.lastElementChild;
                    if (form_update.name === form.name) {
                        btnClose.innerText = 'Close';
                        if (btnClose.getAttribute('checkExit') === "false") {
                            btnClose.setAttribute('checkExit', 'true');
                            form.classList.remove('hide-element');
                        } else {
                            btnClose.innerText = 'Update';
                            form.classList.add('hide-element');
                            btnClose.setAttribute('checkExit', 'false');
                        }
                    } else {
                        btnClose.innerText = 'Update';
                        form.classList.add('hide-element');
                    }

                });

                var form_htmls_update = `
                <div class="form_group_create width__full_row">
                    <label for="name" class="colum_2">Name</label>
                    <input type="text" name="name" id="name" value="${name}">
                </div>
                <div class="form_group_create width__full_row">
                    <label for="desciption" class="colum_2">Desciption</label>
                    <textarea rows="7" style="width: 375px;" name="desciption" id="desciption" placeholder="desciption">${desciption}</textarea>
                </div class="form_group_create width__full_row">
                <div class="form_group_create width__full_row">
                    <label for="author" class="colum_2">Author</label>
                    <input type="text" name="author" id="author" value="${author}">
                </div>
                <div class="form_group_create width__full_row">
                    <label for="publishDate" class="colum_2">PublishDate</label>
                    <input type="text" name="publishDate" id="publishDate" value="${publishDate}">
                </div>
                <button onclick="handleUpdateForm(event, ${idCourse})">Update</button>
                `;
                form_update.innerHTML = form_htmls_update;

            })
            .catch((error) => {
                console.log(error);
            })
    }

    function handleUpdateForm(event, idCourse) {
        event.preventDefault();
        var formUpdate = document.forms['form-update-' + idCourse];
        var name = formUpdate['name'].value;
        var desciption = formUpdate['desciption'].value;
        var author = formUpdate['author'].value;
        var publishDate = formUpdate['publishDate'].value;

        var options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: idCourse,
                name,
                desciption,
                author,
                publishDate
            })
        };

        fetch(courseApi + '/' + idCourse, options)
            .then((response) => {
                return response.json();
            })
            .then(() => {
                getCourse(renderCourses);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function renderCourses(courses) {
        var listCoursesBlock = document.querySelector("#list-courses");
        var htmls = courses.map(function(course, index) {
            return `<li data-id="course-item-${course.id}">
                <h4>${course.id}</h4>
                <p>${course.name}</p>
                <p>${course.desciption}</p>
                <p>${course.author}</p>
                <p>${course.publishDate}</p>
                <button onClick=handleDeleteCourse(${course.id})>Delete</button>
                <button onClick=handleUpdateCourse(${course.id}) checkExit="false">Update</button>
            </li>
            <form class="form-update hide-element" name="form-update-${course.id}"></form>
            `;
        });
        listCoursesBlock.innerHTML = htmls.join('');
    }

    function handleCreateForm() {
        var createBtn = document.querySelector('#create_course');
        createBtn.onclick = function() {
            let $ = document.querySelector.bind(document)
            var name = $('input[name="name"]').value;
            var desciption = $('textarea[name="desciption"]').value;
            var author = $('input[name="author"]').value;
            var publishDate = $('input[name="publishDate"]').value;

            var formData = {
                name: name,
                desciption: desciption,
                author: author,
                publishDate: publishDate
            }
            createCourses(formData, function() {
                getCourse(renderCourses);
                clearForm();
            });
        }
    }

    function clearForm() {
        let $ = document.querySelector.bind(document)
        $('input[name="name"]').value = '';
        $('textarea[name="desciption"]').value = '';
        $('input[name="author"]').value = '';
        $('input[name="publishDate"]').value = '';
    }