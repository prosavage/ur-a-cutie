export default async (req, res) => {
    
    const compliments = [
        "You are beautiful",
        "You are a cutie",
        "You are freakin amazing",
        "You are a hottie",
        "You are gorgeous",
        "Your smile is perfect",
        "You're a great kisser.",
        "You deserve the world",
        "You light up my world",
        "You have a good taste in boyfriends",
        "You are flawless",
        "You are sexy",
        "You are looking great today",
        "You are my everything",
        "You are a beauty"
    ]

    const chosenCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    res.statusCode = 200
    res.json({ compliment: chosenCompliment })
  }
  