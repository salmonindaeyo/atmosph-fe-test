import { useEffect, useState } from "react";

interface Props {
  wordsArray: string[][];
  delay?: number;
  time?: number;
}

const Words: React.FC<Props> = ({ wordsArray, time = 5000, delay = 0 }) => {
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [word2Index, setWord2Index] = useState<number>(0);

  useEffect(() => {
    let changeText: any;
    changeText = setTimeout(() => {
      setWordIndex((wordIndex) => wordIndex + 1);
      setTimeout(() => {
        setWord2Index((word2Index) => word2Index + 1);
      }, delay);
    }, time);
    return () => {
      clearTimeout(changeText);
    };
  }, [wordIndex]);

  useEffect(() => {
    if (wordIndex === wordsArray[0].length - 1) {
      setTimeout(() => {
        setWordIndex(0);
      }, 500);
    }
  }, [wordIndex, wordsArray[0]]);

  useEffect(() => {
    if (word2Index === wordsArray[1].length - 1) {
      setTimeout(() => {
        setWord2Index(0);
      }, 500);
    }
  }, [word2Index, wordsArray[1]]);

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1800">
        <Word words={wordsArray[0]} wordIndex={wordIndex} />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2100">
        <Word words={wordsArray[1]} wordIndex={word2Index} />
      </div>
    </>
  );
};

interface WordProps {
  words: string[];
  wordIndex: number;
}
const Word: React.FC<WordProps> = ({ words, wordIndex }) => {
  return (
    <div className="h-[36px] md:h-[66px] lg:h-[90px] 3xl:h-[144px] flex items-center">
      <div className="overflow-hidden h-[24px] md:h-[44px] lg:h-[60px] 3xl:h-[96px]">
        <ul
          className="duration-500"
          style={{
            transform: `translate3d(0, -${
              (100 / words.length) * wordIndex
            }%, 0)`,
            transitionDuration: wordIndex === 0 ? "0ms" : "500ms",
          }}
        >
          {words.map((word, index) => {
            return (
              <p
                key={index}
                className="uppercase text-primary z-[999] leading-[24px] md:leading-[44px] lg:leading-[60px] 3xl:leading-[96px] text-[24px] md:text-[44px] lg:text-[60px] 3xl:text-[96px] font-bold"
              >
                {word}
              </p>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Words;
