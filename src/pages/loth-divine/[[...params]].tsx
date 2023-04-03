import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "@/components/Image";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";

const BASE_ILVL = 330;
const ILVL_STEP = 4;
const DEFAULT_KEY = 10;
const DEFAULT_ILVL = BASE_ILVL + DEFAULT_KEY * ILVL_STEP;
const Home = () => {
  const router = useRouter();
  const [keyLvl, setKeyLvl] = useState(DEFAULT_KEY);
  const [iLvl, setILvl] = useState(DEFAULT_ILVL);
  useEffect(() => {
    if (router.query.params) {
      const [pKeyLvl, pILvl] = (router.query.params as string[]).map((s) =>
        parseInt(s)
      );
      setKeyLvl(pKeyLvl);
      setILvl(pILvl);
    }
  }, [router.query.params]);
  useEffect(() => {
    if (keyLvl === DEFAULT_KEY && iLvl === DEFAULT_ILVL) {
      return;
    }
    router.push(`/loth-divine/${keyLvl}/${iLvl}`, undefined, { shallow: true });
  }, [keyLvl, iLvl]);
  const targetILvl = BASE_ILVL + keyLvl * ILVL_STEP;
  const scale = 5 + (iLvl - targetILvl) / 5.2;
  const barScale = Math.abs(5 - scale) / 5;
  const barColor =
    barScale < 0.5 ? "bg-green" : barScale < 0.9 ? "bg-gold" : "bg-orange";

  return (
    <>
      <Head>
        <title>No Pressure - the Loth-Divine Scale</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </Head>
      <Nav navItems={[]} />
      <main className="h-full max-w-5xl mx-auto flex flex-col items-center gap-y-12 md:gap-y-16 pb-8 pt-24 px-4">
        <h1 className="text-3xl mt-12">The Loth-Divine Scale</h1>
        <div className="flex flex-col items-center gap-y-4 w-full">
          <div className="flex justify-between items-center w-full md:w-[32em] h-20 px-4 gap-x-2">
            <Image
              alt="Loth"
              className="basis-px z-10"
              height={64}
              src="/loth-divine/loth.png"
              width={64}
            />
            <div className="relative flex justify-between basis-full h-full text-center">
              {Array(11)
                .fill(0)
                .map((_, i) => (
                  <span
                    className={`leading-[5] w-[1.2em] text-purple z-10`}
                    key={i}
                  >
                    {i != 5 && i}
                  </span>
                ))}
              <div
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${
                    scale < 5 ? "180deg" : "0"
                  }) scaleX(${barScale})`,
                }}
              >
                <div className={`ml-auto w-1/2 h-full ${barColor} z-0`}></div>
              </div>
              {barScale === 0 && (
                <div className="absolute w-full h-full text-center leading-[5] z-20">
                  Perfect!
                </div>
              )}
            </div>
            <Image
              alt="Divine"
              className="basis-px z-10"
              height={64}
              src="/loth-divine/divine.gif"
              width={64}
            />
          </div>
          <p className="text-xl">
            Your score on the scale is{" "}
            <span className="text-2xl">{scale.toPrecision(3)}</span>
          </p>
          <label className="flex flex-row gap-x-2 w-[16em]">
            <span className="mr-auto">Keystone level:</span>
            <span>
              +{" "}
              <input
                className="max-w-[4em] bg-purple border-2 border-gold pl-1"
                onChange={(e) =>
                  setKeyLvl(Math.min(Math.max(1, parseInt(e.target.value)), 25))
                }
                type="number"
                value={keyLvl}
              />
            </span>
          </label>
          <label className="flex flex-row gap-x-2 w-[16em]">
            <span className="mr-auto">Item level:</span>
            <input
              className="max-w-[4em] bg-purple border-2 border-gold pl-1"
              onChange={(e) =>
                setILvl(Math.min(Math.max(1, parseInt(e.target.value)), 1000))
              }
              type="number"
              value={iLvl}
            />
          </label>
        </div>
        <div className="flex flex-col gap-y-4 max-w-2xl">
          <p>
            The Loth-Divine scale is perfect to tell at a glance how well geared
            you are for a dungeon, with values ranging from Loth (0) being
            undergeared to Divine (10) being overgeared.
          </p>
          <p>
            For example, bringing a 384 ilvl into a +20 dungeon would give you a
            score of Loth (0). On the other hand, requiring a 420 ilvl for a +16
            dungeon would give you a score of Divine (10).
          </p>
          <p>
            Now you too can enjoy the Loth-Divine scale without doing any math
            at all! Just punch the numbers in and let it work its magic.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
