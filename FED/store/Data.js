export const getSkillTypeList = () => {
    let skillTypeList = [{ title: 'שפה רצפטיבית', levels: 5 },
    { title: 'כישורים חברתיים', levels: 5 },
    { title: 'משחק', levels: 4 },
    { title: 'קוגנציה', levels: 4 },
    { title: 'קשב משותף', levels: 3 },
    { title: 'מוטוריקה עדינה', levels: 3 },
    { title: 'התנהגות', levels: 4 },
    { title: 'שפה אקספרסיבית', levels: 5 },
    { title: '' }]
    return skillTypeList
}

export const getNums = () => {
    let numOfDays = [
        {title: '- 1 -'},
        {title: '- 2 -'},
        {title: '- 3 -'},
        {title: '- 4 -'},
        {title: '- 5 -'},
        {title: '- 6 -'},
    ]
    return numOfDays;
}

export const getEnvs = () =>{
    let envs = [
        {title: 'בית '},
        {title: 'חצר'},
        {title: 'פארק'},
        {title: 'חדר טיפולים'},
        {title: 'מטבח'},
        {title: 'ים'},
    ]
    return envs
}

