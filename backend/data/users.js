import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'jasper_hendrickx@hotmail.com',
    password: bcrypt.hashSync('123456', 10),
    feedback: [
      {
        category: 'Pronunciation',
        mainText: [
          'It seems like you are reading a Youdao translation. You are mispronouncing many words and you seem to have no idea what these words mean.',
          'Your pronunciation is very hard or impossible to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is hard to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is clear enough. However, you have to pay more attention to common pronunciation issues.',
          'You speak clearly with good intonation, but you should still work more on common issues.',
          'Your pronunciation is accurate, with appropriate intonation, numbers of syllables and other correct nuances of pronunciation.',
        ],
        commonErrors: [
          {
            name: 'TH',
            text: 'You have to work on your th sound (e.g. "think, thought, thank" NOT "sink, sought, sank").',
          },
          {
            name: 'V',
            text: 'You have to work on your V sound (e.g. "very" NOT "wary").',
          },
          {
            name: 'E',
            text: 'The E sound in English is not the same as in Chinese. Practise the pronunciation of words like "tent", "sent" and "then" (NOT like "们").',
          },
        ],
      },
      {
        category: 'Fluency',
        mainText: [
          'You have many hesitations and great difficulty remembering or choosing words.',
          'You have many hesitations and great difficulty remembering or choosing words.',
          'You have many hesitations and great difficulty remembering or choosing words.',
          'You hesitated several times, but you generally seem to know the desired words, even if it is sometimes necessary to think about them a bit.',
          'You hesitated one or two times, but other than that you speak confidently and your ideas flow smoothly.',
          'You speak confidently and naturally with no distracting hesitations. Your ideas flow smoothly.',
        ],
        commonErrors: [
          {
            name: 'Reading',
            text: 'You are relying too much on your text. You have to learn to speak from memory without reading from your text.',
          },
          {
            name: 'Punctuation',
            text: 'You have to work on speaking naturally, such as pausing when there is a comma or a full stop.',
          },
          {
            name: 'Multiple Takes',
            text: 'You recorded yourself using multiple takes. You have to record your entire presentation in 1 take.',
          },
        ],
      },
      {
        category: 'Grammar',
        mainText: [
          'You make extremely basic mistakes, such as not distinguishing plural/singular or not conjugating your verbs at all.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You often use the tenses we have seen incorrectly, go back and practise the grammar points again.',
          'You occasionally use incorrect verb tenses or incorrectly use parts of speech. However, most of the time you are using correct grammar.',
          'You use the tenses we have seen perfectly and naturally.',
        ],
        commonErrors: [
          {
            name: 'Present tenses',
            text: 'Text for present tenses',
          },
          {
            name: 'Past tenses',
            text: 'Text for past tenses',
          },
          {
            name: 'Future tenses',
            text: 'Text for future tenses',
          },
        ],
      },
      {
        category: 'Vocabulary',
        mainText: [
          'You seem to be using a Youdao translation, because you are pronouncing many words incorrectly or using them in the wrong context.',
          'Your vocabulary is very limited and you often use incorrect words.',
          'Your vocabulary is limited and you often use incorrect words.',
          'Your use of vocabulary is good, but you sometimes have problems using words with the correct meaning.',
          'Your vocabulary is sufficient to be understood in most settings and you use words with their correct meaning.',
          'Your vocabulary is rich and you use words with their correct meaning.',
        ],
        commonErrors: [
          {
            name: 'Play',
            text: 'Text for play with my friends',
          },
          {
            name: 'Playground',
            text: 'Text for playground',
          },
          {
            name: 'There have',
            text: 'Text for there have instead of there is/are',
          },
        ],
      },
      {
        category: 'Content',
        mainText: [
          'You did not demonstrate any understanding of the topic.',
          'You seem to have little or no understanding of the topic. Your statements were superficial or not relevant.',
          'You seem to have very little understanding of the topic. Your statements were superficial or not relevant.',
          'You are aware of the topic and you attempted to provide relevant ideas about it. You provided some (but not many) details.',
          'You are knowledgeable about the topic and you provided a significant amount of detail given the time available.',
          'You are very knowledgeable about the topic and you provided an outstanding amount of detail given the time available.',
        ],
        commonErrors: [
          {
            name: 'Under minimum time',
            text: 'You did not reach the minimum time requirements.',
          },
          {
            name: 'Not relevant to task',
            text: 'You did not answer the questions properly, make sure that you understand the question clearly before you give your answer.',
          },
          {
            name: 'Youdao translation',
            text: 'This is clearly a Youdao or Baidu translation. You have to write your own text or your English will never improve.',
          },
        ],
      },
    ],
  },
  {
    name: 'Dave',
    email: 'dave@hotmail.com',
    password: bcrypt.hashSync('123456', 10),
    feedback: [
      {
        category: 'Pronunciation',
        mainText: [
          'It seems like you are reading a Youdao translation. You are mispronouncing many words and you seem to have no idea what these words mean.',
          'Your pronunciation is very hard or impossible to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is hard to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is clear enough. However, you have to pay more attention to common pronunciation issues such as th and v.',
          'You speak clearly with good intonation, but you should still work more on common issues such as th and v.',
          'Your pronunciation is accurate, with appropriate intonation, numbers of syllables and other correct nuances of pronunciation.',
        ],
        commonErrors: [
          {
            name: 'TH',
            text: 'Text for TH',
          },
          {
            name: 'V',
            text: 'Text for V',
          },
          {
            name: 'E',
            text: 'Text for E',
          },
        ],
      },
      {
        category: 'Fluency',
        mainText: [
          'You are reading everything directly from your text. You have to learn to speak naturally without relying on your text.',
          'You are reading too much from your text. You have to learn to speak naturally without relying on your text.',
          'You have many hesitations and great difficulty remembering or choosing words.',
          'You hesitated several times, but you generally seem to know the desired words, even if it is sometimes necessary to think about them a bit.',
          'You hesitated one or two times, but other than that you speak confidently and your ideas flow smoothly.',
          'You speak confidently and naturally with no distracting hesitations. Your ideas flow smoothly.',
        ],
        commonErrors: [
          {
            name: 'Reading',
            text: 'Text for reading',
          },
          {
            name: 'Punctuation',
            text: 'Text for punctuation',
          },
        ],
      },
      {
        category: 'Grammar',
        mainText: [
          'You make extremely basic mistakes, such as not distinguishing plural/singular or not conjugating your verbs at all.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You often use the tenses we have seen incorrectly, go back and practise the grammar points again.',
          'You occasionally use incorrect verb tenses or incorrectly use parts of speech. However, most of the time you are using correct grammar.',
          'You use the tenses we have seen perfectly and naturally.',
        ],
        commonErrors: [
          {
            name: 'Present tenses',
            text: 'Text for present tenses',
          },
          {
            name: 'Past tenses',
            text: 'Text for past tenses',
          },
          {
            name: 'Future tenses',
            text: 'Text for future tenses',
          },
        ],
      },
      {
        category: 'Vocabulary',
        mainText: [
          'You seem to be using a Youdao translation, because you are pronouncing many words incorrectly or using them in the wrong context.',
          'Your vocabulary is very limited and you often use incorrect words.',
          'Your vocabulary is limited and you often use incorrect words.',
          'Your use of vocabulary is good, but you sometimes have problems using words with the correct meaning.',
          'Your vocabulary is sufficient to be understood in most settings and you use words with their correct meaning.',
          'Your vocabulary is rich and you use words with their correct meaning.',
        ],
        commonErrors: [
          {
            name: 'Play',
            text: 'Text for play with my friends',
          },
          {
            name: 'Playground',
            text: 'Text for playground',
          },
          {
            name: 'There have',
            text: 'Text for there have instead of there is/are',
          },
        ],
      },
      {
        category: 'Content',
        mainText: [
          'You did not meet the minimum time requirements for the assignment and you did not demonstrate any understanding of the video.',
          'You seem to have little or no understanding of the video. Your statements were superficial or not relevant.',
          'You seem to have very little understanding of the video. Your statements were superficial or not relevant.',
          'You are aware of the subject of the video and you attempted to provide relevant ideas about it. You provided some (but not many) details.',
          'You are knowledgeable about the subject and you provided a significant amount of detail given the time available.',
          'You are very knowledgeable about the subject and you provided an outstanding amount of detail given the time available.',
        ],
        commonErrors: [
          {
            name: 'Under minimum time',
            text: 'Text for not reaching minimum time requirements',
          },
          {
            name: 'Not relevant to task',
            text: 'Text for unrelated nonsense',
          },
          {
            name: 'Youdao translation',
            text: 'Text for using a Youdao translation',
          },
        ],
      },
    ],
  },
  {
    name: 'Kerin',
    email: 'kerin@hotmail.com',
    password: bcrypt.hashSync('123456', 10),
    feedback: [
      {
        category: 'Pronunciation',
        mainText: [
          'It seems like you are reading a Youdao translation. You are mispronouncing many words and you seem to have no idea what these words mean.',
          'Your pronunciation is very hard or impossible to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is hard to understand by a native speaker. Please review the pronunciation drills.',
          'Your pronunciation is clear enough. However, you have to pay more attention to common pronunciation issues such as th and v.',
          'You speak clearly with good intonation, but you should still work more on common issues such as th and v.',
          'Your pronunciation is accurate, with appropriate intonation, numbers of syllables and other correct nuances of pronunciation.',
        ],
        commonErrors: [
          {
            name: 'TH',
            text: 'Text for TH',
          },
          {
            name: 'V',
            text: 'Text for V',
          },
          {
            name: 'E',
            text: 'Text for E',
          },
        ],
      },
      {
        category: 'Fluency',
        mainText: [
          'You are reading everything directly from your text. You have to learn to speak naturally without relying on your text.',
          'You are reading too much from your text. You have to learn to speak naturally without relying on your text.',
          'You have many hesitations and great difficulty remembering or choosing words.',
          'You hesitated several times, but you generally seem to know the desired words, even if it is sometimes necessary to think about them a bit.',
          'You hesitated one or two times, but other than that you speak confidently and your ideas flow smoothly.',
          'You speak confidently and naturally with no distracting hesitations. Your ideas flow smoothly.',
        ],
        commonErrors: [
          {
            name: 'Reading',
            text: 'Text for reading',
          },
          {
            name: 'Punctuation',
            text: 'Text for punctuation',
          },
        ],
      },
      {
        category: 'Grammar',
        mainText: [
          'You make extremely basic mistakes, such as not distinguishing plural/singular or not conjugating your verbs at all.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You are not paying enough attention to your basic tenses, go back and practise the grammar points again.',
          'You often use the tenses we have seen incorrectly, go back and practise the grammar points again.',
          'You occasionally use incorrect verb tenses or incorrectly use parts of speech. However, most of the time you are using correct grammar.',
          'You use the tenses we have seen perfectly and naturally.',
        ],
        commonErrors: [
          {
            name: 'Present tenses',
            text: 'Text for present tenses',
          },
          {
            name: 'Past tenses',
            text: 'Text for past tenses',
          },
          {
            name: 'Future tenses',
            text: 'Text for future tenses',
          },
        ],
      },
      {
        category: 'Vocabulary',
        mainText: [
          'You seem to be using a Youdao translation, because you are pronouncing many words incorrectly or using them in the wrong context.',
          'Your vocabulary is very limited and you often use incorrect words.',
          'Your vocabulary is limited and you often use incorrect words.',
          'Your use of vocabulary is good, but you sometimes have problems using words with the correct meaning.',
          'Your vocabulary is sufficient to be understood in most settings and you use words with their correct meaning.',
          'Your vocabulary is rich and you use words with their correct meaning.',
        ],
        commonErrors: [
          {
            name: 'Play',
            text: 'Text for play with my friends',
          },
          {
            name: 'Playground',
            text: 'Text for playground',
          },
          {
            name: 'There have',
            text: 'Text for there have instead of there is/are',
          },
        ],
      },
      {
        category: 'Content',
        mainText: [
          'You did not meet the minimum time requirements for the assignment and you did not demonstrate any understanding of the video.',
          'You seem to have little or no understanding of the video. Your statements were superficial or not relevant.',
          'You seem to have very little understanding of the video. Your statements were superficial or not relevant.',
          'You are aware of the subject of the video and you attempted to provide relevant ideas about it. You provided some (but not many) details.',
          'You are knowledgeable about the subject and you provided a significant amount of detail given the time available.',
          'You are very knowledgeable about the subject and you provided an outstanding amount of detail given the time available.',
        ],
        commonErrors: [
          {
            name: 'Under minimum time',
            text: 'Text for not reaching minimum time requirements',
          },
          {
            name: 'Not relevant to task',
            text: 'Text for unrelated nonsense',
          },
          {
            name: 'Youdao translation',
            text: 'Text for using a Youdao translation',
          },
        ],
      },
    ],
  },
];

export default users;
