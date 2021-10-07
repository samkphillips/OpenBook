export default [
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Adam',
    content: "Woah here's the first post",
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Fran',
        content: 'First comment',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Garrett',
        content: 'Second comment',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
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
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date'
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Charlie',
    content:
      "We've been trying to contact you about your car's extended warra-",
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Ivan',
        content: 'oh my god not here too',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
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
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date'
  },
  {
    id: Math.floor(Math.random() * 10000),
    name: 'Evelyn',
    content: 'This is so much better than facebook lmao',
    likes: Math.floor(Math.random() * 100),
    dislikes: Math.floor(Math.random() * 100),
    created_at: 'Some Date',
    updated_at: 'Another Date',
    comments: [
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Ivan',
        content: 'Love this',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Josie',
        content: 'This reminds me of my cat, I love her so muchhh',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      },
      {
        id: Math.floor(Math.random() * 10000),
        name: 'Kate',
        content: 'Cool story bro',
        likes: Math.floor(Math.random() * 100),
        dislikes: Math.floor(Math.random() * 100),
        post_id: Math.floor(Math.random() * 5),
        created_at: 'Some Date',
        updated_at: 'Another Date'
      }
    ]
  }
]
