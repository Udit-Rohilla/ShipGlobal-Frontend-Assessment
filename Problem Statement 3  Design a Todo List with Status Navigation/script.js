// script.js

document.addEventListener('DOMContentLoaded', () => {
    const columns = {
        backlog: document.getElementById('backlog').querySelector('.task-list'),
        todo: document.getElementById('todo').querySelector('.task-list'),
        ongoing: document.getElementById('ongoing').querySelector('.task-list'),
        done: document.getElementById('done').querySelector('.task-list')
    };

    function moveTask(task, fromColumn, toColumn) {
        fromColumn.removeChild(task); // Remove the task from the current column
        toColumn.appendChild(task);   // Append the task to the new column
    }

    function updateTaskButtons(task, fromColumnId, toColumnId) {
        const prevButton = task.querySelector('.prev-btn');
        const nextButton = task.querySelector('.next-btn');

        // Update the visibility of the prev and next buttons based on the target column
        if (toColumnId === 'backlog') {
            prevButton.style.display = 'none'; // Hide the left arrow in the Backlog column
            nextButton.style.display = 'inline-block'; // Ensure the right arrow is visible
        } else if (toColumnId === 'done') {
            nextButton.style.display = 'none'; // Hide the right arrow in the Done column
            prevButton.style.display = 'inline-block'; // Ensure the left arrow is visible
        } else {
            // For "To Do" and "Ongoing", show both buttons
            prevButton.style.display = 'inline-block';
            nextButton.style.display = 'inline-block';
        }
    }

    document.querySelectorAll('.next-btn').forEach(button => {
        button.addEventListener('click', () => {
            const task = button.parentElement;  // Get the task item
            const fromColumnId = task.parentElement.parentElement.id;  // Identify the current column
            let toColumnId;

            // Determine the target column based on the current column
            if (fromColumnId === 'backlog') toColumnId = 'todo';
            else if (fromColumnId === 'todo') toColumnId = 'ongoing';
            else if (fromColumnId === 'ongoing') toColumnId = 'done';

            if (toColumnId) {
                // Move the task from the current column to the target column
                moveTask(task, columns[fromColumnId], columns[toColumnId]);
                updateTaskButtons(task, fromColumnId, toColumnId);
            }
        });
    });

    document.querySelectorAll('.prev-btn').forEach(button => {
        button.addEventListener('click', () => {
            const task = button.parentElement;  // Get the task item
            const fromColumnId = task.parentElement.parentElement.id;  // Identify the current column
            let toColumnId;

            // Determine the target column based on the source column
            if (fromColumnId === 'todo') toColumnId = 'backlog';
            else if (fromColumnId === 'ongoing') toColumnId = 'todo';
            else if (fromColumnId === 'done') toColumnId = 'ongoing';

            if (toColumnId) {
                // Move the task from the current column to the target column
                moveTask(task, columns[fromColumnId], columns[toColumnId]);
                updateTaskButtons(task, fromColumnId, toColumnId);
            }
        });
    });
});
