export const parent = {
  username: 'JSmith',
  password: 'test',
  firstName: 'Jason',
  lastName: 'Smith',
  email: 'jsmith@yahoo.com',
  DOB: '05/18/76',
  phoneNum: '630-573-3923',
  emergencyPhone: '630-573-3912',
  type: 'parent',

  children: [{
      firstName: 'Janet',
      lastName: 'Smith',
      age: 4,
      medicalConditions: 'Asthma, Sinus allergies',
      specialInstructions: 'For allergies give benedryl' },

      { firstName: 'Lacey',
      lastName: 'Smith',
      age: 8,
      medicalConditions: 'None',
      specialInstructions: 'None' },

      { firstName: 'Jake',
      lastName: 'Smith',
      age: 5,
      medicalConditions: 'None',
      specialInstructions: 'None' },

      { firstName: 'Chris',
      lastName: 'Smith',
      age: 10,
      medicalConditions: 'None',
      specialInstructions: 'None' },

      { firstName: 'Stephanie',
      lastName: 'Smith',
      age: 1,
      medicalConditions: 'None',
      specialInstructions: 'None' },
  ]
};

export const volunteer = {
  username: 'SHammond1',
  password: 'ham1',
  firstName: 'Stephen',
  lastName: 'Hammond',
  email: 'shammond1@yahoo.com',
  DOB: '02/10/80',
  phoneNum: '802-485-5123',
  avgPerChild: 35.50,
  priceNegotiable: 0,
  CPR_Certified: 1,
  type: 'volunteer'
};


export const messages = [
  {
    post: "0",
    location: "Magic Kingdom",
    time: "1:00 pm"
  },

  {
    post: "1",
    location: "Swan Hotel and Restaurant",
    time: "7:00 pm"
  },

  {
    post: "2",
    location: "Swan Hotel",
    time: "3:00 pm"
  },

  {
    post: "3",
    location: "Epcot",
    time: "12:00 - 3:00 pm"
  },

  {
    post: "4",
    location: "All Star Sports Resort",
    time: "ASAP"
  },

  {
    post: "5",
    location: "Carribean Beach Resort",
    time: "6:00 - 10:00 pm"
  },
]

export const comments = [
  {
    comment: "I can watch your children during that time",
    post_id: "0"
  },

  {
    comment: "I am available during that time",
    post_id: "3"
  },

  {
    comment: "I apologize, I am only available until 2:00 pm let me know if you would like me to watch them during that time",
    post_id: "3"
  },

  {
    comment: "I am available immediately, you can call me",
    post_id: "4"
  },

  {
    comment: "I will be at Swan Hotel until 6:00 pm that night",
    post_id: "1"
  },

  {
    comment: "Please give me a call if you need my services, thanks!",
    post_id: "2"
  },
]