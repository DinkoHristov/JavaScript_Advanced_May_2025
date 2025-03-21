class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        }

        this.tasks.push({
            description,
            cost,
            priority,
        });

        this.budget -= cost;

        return `The task '${description}' has been successfully added to the renovation plan.`;
    }

    markTaskAsCompleted(description) {
        let foundTask = this.tasks.find(x => x.description === description);

        if (foundTask === undefined) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        this.tasks.splice(this.tasks.indexOf(foundTask), 1);
        this.completedTasks.push(foundTask);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount (minimalPriority) {
        if (minimalPriority <= 0) {
            return 'The priority cannot be zero or negative.';
        }

        let foundPriorityTasks = this.tasks.filter(x => x.priority >= minimalPriority).length;

        if (foundPriorityTasks === 0) {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }

        return `You have ${foundPriorityTasks} tasks to prioritize.`;
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error('No tasks have been completed yet!');
        }

        let resultMessage = '';

        resultMessage += `Budget left $${this.budget}.\n`;
        resultMessage += `You have completed ${this.completedTasks.length} tasks.\n`;
        resultMessage += `Pending tasks in the renovation plan:\n`;
        resultMessage += this.tasks.map(x => `${x.description} - Cost: ${x.cost}, Priority: ${x.priority}`).join('\n');

        return resultMessage.trimEnd();
    }
}    

const renovation = new HomeRenovation(10000);

console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());