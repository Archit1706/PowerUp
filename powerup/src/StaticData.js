const FRONTEND_URL = 'https://powerup.sidd065.repl.co';
const frontend_half_url = 'powerup.sidd065.repl.co';
const BACKEND_URL = 'https://Backend.sidd065.repl.co';
const getSteps24 = { //24 hours of steps
    message: 'success',
    data: [
        0, 0, 0, 0, 7, 0, 19, 0,
        0, 0, 89, 0, 8, 66, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0
    ],
    sum: 207,
    success: true
}

const getSteps7d = { //7 day of steps
    message: 'success',
    data: [
        0, 0, 0, 0,
        0, 0, 189
    ],
    sum: 189,
    success: true
}

const getCalories24 = {
    message: 'success',
    data: [
        77.79166666666667, 77.79166666666667,
        77.79166666666667, 77.96860415494751,
        81.54166641831397, 81.54166641831397,
        81.54166641831397, 81.54166641831397,
        81.54166641831397, 81.54166641831397,
        81.54166641831397, 81.54166641831397,
        81.54166641831397, 42.51201162202218,
        0, 0,
        0, 0,
        0, 0,
        0, 0,
        0, 0
    ],
    sum: 1200,
    success: true
}

const getCalories7d = {
    message: 'success',
    data: [0, 0, 0, 0, 1555.9437542824073, 1867, 1091.2906627316102],
    sum: 4513,
    success: true
}
const getGoals = { //goals set by user
    message: 'success',
    data: {
        weight: 90,
        height: 172,
        stepGoal: 7000,
        calGoal: 1500,
        weightGoal: 80
    },
    success: true
}

const getmealdetails = { //total cal, prot, fats consumed in a day
    calories: 1500,
    proteins: 80,
    fats: 90
}

const search = [ //returns array of friends with all the necessay info to be displayed for each
    {
        _id: '63c7ef219c7e7bff2bab703b',
        name: 'User2',
        email: 'user2@gmail.com',
        password: '$2a$10$6rE2SseE2hYXa2rTl7iTeey4lJAYKn1r5jjU4BySum/OYjBGAtvcS',
        refreshToken: '',
        weight: 123,
        height: 345,
        stepGoal: 123,
        calGoal: 1234,
        weightGoal: 12,
        friend: ['63c7ef219c7e7bff2bab703b', '63c7ef219c7e7bff2bab703b'],
        createdAt: '2023-01-18T13:07:45.730Z',
        updatedAt: '2023-01-18T13:08:20.903Z',
        __v: 0
    }
]

const find = {
    // _id: new ObjectId("63c7ef219c7e7bff2bab703b"),
    name: 'User2',
    email: 'user2@gmail.com',
    password: '$2a$10$6rE2SseE2hYXa2rTl7iTeey4lJAYKn1r5jjU4BySum/OYjBGAtvcS',
    refreshToken: '',
    weight: 123,
    height: 345,
    stepGoal: 123,
    calGoal: 1234,
    weightGoal: 12,
    friend: ['63c7ef219c7e7bff2bab703b', '63c7ef219c7e7bff2bab703b'],
    createdAt: '2023-01-18T13:07:45.730Z',
    updatedAt: '2023-01-18T13:08:20.903Z',
    __v: 0
}

export { FRONTEND_URL, frontend_half_url, BACKEND_URL, getSteps24, getSteps7d, getCalories24, getCalories7d, getGoals, getmealdetails, search, find }