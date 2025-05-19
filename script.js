document.addEventListener("DOMContentLoaded", function () {
    const taskForm = document.getElementById("taskForm");
    const taskList = document.getElementById("taskList");

    function loadTasks() {
        taskList.innerHTML = "";
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach((task, index) => {
            const div = document.createElement("div");
            div.className = "task";
            div.innerHTML = `
                <p>${task}</p>
                <button onclick="deleteTask(${index})">حذف</button>
            `;
            taskList.appendChild(div);
        });
    }

    window.deleteTask = function(index) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    };

    if (taskForm) {
        taskForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const taskInput = document.getElementById("taskInput");
            const task = taskInput.value.trim();
            if (task) {
                const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                tasks.push(task);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                taskInput.value = "";
                alert("تمت إضافة المهمة!");
            }
        });
    }

    if (taskList) {
        loadTasks();
    }
});
