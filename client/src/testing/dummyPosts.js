export default [
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Adam',
    content: "Woah here's the first post",
    like: Math.floor(Math.random() * 100),
    dislike: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Fran',
        content: 'First comment',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Garrett',
        content: 'Second comment',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      }
    ]
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Beverly',
    content: "Here's a second one.",
    like: Math.floor(Math.random() * 100),
    dislike: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date'
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Charlie',
    content:
      "We've been trying to contact you about your car's extended warra-",
    like: Math.floor(Math.random() * 100),
    dislike: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Ivan',
        content: 'oh my god not here too',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      }
    ]
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Don',
    content: 'haha look at this minion',
    like: Math.floor(Math.random() * 100),
    dislike: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date'
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Evelyn',
    content: 'This is so much better than facebook lmao',
    like: Math.floor(Math.random() * 100),
    dislike: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Ivan',
        content: 'Love this',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Josie',
        content: 'This reminds me of my cat, I love her so muchhh',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Kate',
        content: 'Cool story bro',
        like: Math.floor(Math.random() * 100),
        dislike: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      }
    ]
  }
]
