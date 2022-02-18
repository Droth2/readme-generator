

const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (required)',
        validate: projectTitleInput => {
            if (projectTitleInput) {
                return true;
            } else {
                console.log('Please enter a title!');
                return false;
            }
        }
    },
    {
        
    }
];
