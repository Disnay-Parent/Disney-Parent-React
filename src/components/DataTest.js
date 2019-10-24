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
    post: "I need somebody to watch my children for 1 hour",
    location: "Magic Kingdom",
    time: "1:00 pm"
  },

  {
    post: "We would like to go to dinner tonight",
    location: "Swan Hotel and Restaurant",
    time: "7:00 pm"
  },

  {
    post: "I need to get some groceries for our hotel room",
    location: "Swan Hotel",
    time: "3:00 pm"
  },

  {
    post: "Looking for somebody to watch our children for a few hours, then we can watch your children for the same time",
    location: "Epcot",
    time: "12:00 - 3:00 pm"
  },

  {
    post: "Husband is sick, can somebody watch children while I take him to the doctor?",
    location: "All Star Sports Resort",
    time: "ASAP"
  },

  {
    post: "We are leaving the resort to go to a dinner theatre in Orlando, need a babysitter for a couple hours",
    location: "Carribean Beach Resort",
    time: "6:00 - 10:00 pm"
  },
]