import React, { useEffect, useRef, useState } from 'react'
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import * as styles from '~/global.css';
import useAutosizeTextArea from '~/components/useAutosizeTextArea';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

interface Assistant {
  id: string;
  username: string;
  displayName: string;
  bio: string;
  feedIds: string[];
  peopleIds: string[];
  avatar: string;
}

const ASSISTANT_DATA: Record<string, Assistant> = {
  // dexa: {
  //   id: 'dexa',
  //   username: 'Dexa',
  //   displayName: 'Dexa',
  //   bio: 'Learn from the best.',
  //   feedIds: [],
  //   peopleIds: [],
  //   avatar: './assets/img/logoIcon.svg',
  // },
  lex: {
    id: 'lex',
    username: 'LexFridman',
    displayName: 'Lex Fridman Podcast',
    bio: 'Research scientist at MIT, working on human-centered artificial intelligence, autonomous vehicles, and more.',
    feedIds: [],
    peopleIds: [],
    avatar: 'https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_1',
  },
  huberman: {
    id: 'huberman',
    username: 'HubermanLab',
    displayName: 'Huberman Lab',
    bio: `Huberman Lab discusses neuroscience: how our brain and its connections with the organs of our body control our perceptions, our behaviors, and our health.`,
    feedIds: ['feed_4'],
    peopleIds: ['pers_78'],
    avatar: 'https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_78',
  },
  shane: {
    id: 'shane',
    username: 'ShaneParrish',
    displayName: 'Shane Parrish',
    bio: `Thought leader known for his conversations with world-class experts from diverse fields, aimed at unraveling the frameworks they use for decision making and learning.`,
    feedIds: ['feed_5'],
    peopleIds: ['pers_79'],
    avatar: 'https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_239',
  },
  rhonda: {
    id: 'rhonda',
    username: 'RhondaPatrick',
    displayName: 'Rhonda Patrick',
    bio: `Distinguished biomedical scientist, celebrated for her comprehensive research on the role of nutritional health, physical activity, and genetics in aging and diseases.`,
    feedIds: ['feed_7'],
    peopleIds: ['pers_88'],
    avatar: 'https://assets.standardresume.co/image/upload/w_96,h_96,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_246',
  },
  justin: {
    id: 'justin',
    username: 'JustinAndrews',
    displayName: 'Justin Andrews',
    bio: `Justin bio.`,
    feedIds: ['feed_12'],
    peopleIds: ['pers_98'],
    avatar: 'https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_1256',
  },
  jordan: {
    id: 'jordan',
    username: 'JordanHarbinger',
    displayName: 'Jordan Harbinger',
    bio: `Jordan bio.`,
    feedIds: ['feed_22'],
    peopleIds: ['pers_108'],
    avatar: 'https://assets.standardresume.co/image/upload/w_128,h_128,c_thumb,g_face,q_auto,f_auto,dpr_2,z_0.9/dexa/people/pers_595',
  },
}


export default function Index() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTag, setIsTag] = useState<boolean>(false);
  const [selectTag, setSelectTag] = useState<string>("");
  const [inputText, setInputText] = useState<string>("");
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, inputText);

  const toggleAtMenu = () => setIsActive(!isActive);
  const removeTag = () => {
    setIsTag(!isTag);
    setIsActive(true);
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      setFocusedIndex(0);
    }
  }, [inputText]);

  useEffect(() => {
    const focusedItem = itemRefs.current[focusedIndex];
    if (isActive && focusedItem) {
      focusedItem.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }
  }, [focusedIndex, isActive]);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setInputText(value);
    setIsActive(value.includes('@'));
  };

  useEffect(() => {
    if (isActive && filteredData.length > 0) {
      setFocusedIndex(-1);
    }
  }, [isActive]);


  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && isActive && filteredData.length > 0) {
      event.preventDefault();
      selectUsername(filteredData[focusedIndex][1].username);
    } else if (event.key === 'ArrowUp' && focusedIndex > 0) {
      setFocusedIndex(focusedIndex - 1);
    } else if (event.key === 'ArrowDown' && focusedIndex < filteredData.length - 1) {
      setFocusedIndex(focusedIndex + 1);
    }
  };

  const selectUsername = (username: string) => {
    setSelectTag(`@${username}`);
    setIsActive(false);
    setIsTag(true);
    // Removing the @username from the text input only - if user already wrote somethimg
    const newText = inputText.replace(/@\S+/g, '');
    setInputText(newText);
  };

  const filteredData = Object.entries(ASSISTANT_DATA).filter(([key, value]) => {
    if (inputText.includes('@')) {
      const searchTerm = inputText.split('@').pop() || '';
      return searchTerm === '' || value.username.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true; // Return all data if '@' is not included in the input text
  });


  return (
    <div>
      <div className={styles.header}>
        <a href="/" className={styles.logo}><img src="./assets/img/logo.svg" /></a>
        <ul className={styles.menu}>
          <li>History</li>
          <li>Sign up</li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.containerRight}></div>
        <div className={styles.atMenuWrap}>
          <div className={`${styles.atMenu} ${isActive ? styles.atMenuActive : ''}`}>
            <ul className={styles.atMenuUl}>
              {filteredData.map(([key, value], index) => (
                <li
                  key={value.id}
                  onClick={() => selectUsername(value.username)}
                  className={`${styles.atMenuLi} ${index === focusedIndex ? styles.atMenuLiFocused : ''}`}
                  ref={el => itemRefs.current[index] = el}>
                  <img src={value.avatar} alt={`${value.username} avatar`} className={styles.atMenuImg} />
                  <div>@{value.username} <span className={styles.atMenuLiName}>{value.displayName}</span></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <form action="#" className={`${styles.chatbox} ${isActive ? styles.chatboxActive : ''}`}>
          <div className={styles.chatboxLeft}>
            <img src="./assets/img/logoIcon.svg" className={styles.logoIcon} />
            <div className={`${styles.searchTagWrap} ${isTag ? styles.searchTagActive : ''}`}>
              <div className={styles.searchTag} onClick={removeTag}>
                {selectTag} 
                <img src="./assets/img/close.svg" className={styles.searchTagCloseIcon} />
              </div>
            </div>
            <textarea ref={textAreaRef} rows={1} name="ask" placeholder="Ask anything" value={inputText} onChange={handleInputChange} onKeyDown={handleKeyPress} className={styles.textarea}></textarea>
          </div>
          <div className={styles.chatboxRight}>
            <a href="#" onClick={toggleAtMenu} onKeyDown={handleKeyPress}><img src="./assets/img/at.svg" className={styles.atIcon} /></a>
            <button className={`${styles.button} ${isTag ? styles.buttonActive : ''}`}><img src="./assets/img/arrow.svg" className={styles.buttonIcon}/></button>
          </div>
        </form>
      </div>
    </div>
  );
}
