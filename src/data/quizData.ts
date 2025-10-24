export interface Question {
  id: number;
  question: string;
  options: string[];
  reaction: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Why you don't call me?😰",
    options: [
      "I'm always busy 📱",
      "I'm Motu 😰",
      "Chaotic Life 🤦",
      "I call you in my dreams 💭"
    ],
    reaction: "Aww! You better start calling me more, or else I will Love you more! 😤💕"
  },
  {
    id: 2,
    question: "How much do you love me?",
    options: [
      "More than Chole Bhature 🍕",
      "More than sleep 😴",
      "More than anything in this universe 🌌",
      "Infinity × Infinity ♾️"
    ],
    reaction: "I Love you so much Diya 🥹😘❤️"
  },
  {
    id: 3,
    question: "Why are you so cute?",
    options: [
      "It's genetic 🧬",
      "I practice in the mirror 🪞",
      "Because you make me this way 💖",
      "Am I though? 🙈"
    ],
    reaction: "I am so lucky and grateful to have you in My Life! 🥹🥰✨"
  },
  {
    id: 4,
    question: "Why are you short?",
    options: [
      "Chota Packet, Bada Dhamaka 📦",
      "Perfect height for hugs ❤️",
      "Easier to steal your hoodies 👕",
      "So you can pick me up and carry me 💪"
    ],
    reaction: "As you say My Prime Minister 🛐 Perfect Hugs means Diya and Suyash 🤗"
  },
  {
    id: 5,
    question: "Why I always faint when seeing you in real?",
    options: [
      "Because I'm too Beautiful and Cute 😎",
      "You need to eat more 🍔",
      "My beauty is overwhelming 💅",
      "Because you love me too much 💞"
    ],
    reaction: "Goddess Lakshmi Herself on the Earth 😍🥹💓"
  }
];
