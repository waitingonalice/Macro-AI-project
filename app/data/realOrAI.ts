import airport_tower_ai from "/images/real-or-ai/ai_images/airport_tower.png";
import airport_tower_real from "/images/real-or-ai/real_images/airport_tower.png";
import apt_on_fire_ai from "/images/real-or-ai/ai_images/apt_on_fire.png";
import apt_on_fire_real from "/images/real-or-ai/real_images/apt_on_fire.jpeg";
import baby_in_suit_ai from "/images/real-or-ai/ai_images/baby_in_suit.png";
import baby_in_suit_real from "/images/real-or-ai/real_images/baby_in_suit.jpeg";
import cow_ai from "/images/real-or-ai/ai_images/cow.png";
import cow_real from "/images/real-or-ai/real_images/cow.jpg";
import divers_ai from "/images/real-or-ai/ai_images/divers.png";
import divers_real from "/images/real-or-ai/real_images/divers.jpg";
import ecp_beacon_tower_ai from "/images/real-or-ai/ai_images/ecp_beacon_tower.png";
import ecp_beacon_tower_real from "/images/real-or-ai/real_images/ecp_beacon_tower.jpg";
import family_ai from "/images/real-or-ai/ai_images/family.png";
import family_real from "/images/real-or-ai/real_images/family.jpg";
import kallang_river_ai from "/images/real-or-ai/ai_images/kallang_river.png";
import kallang_river_real from "/images/real-or-ai/real_images/kallang_river.png";
import merlion_ai from "/images/real-or-ai/ai_images/merlion.png";
import merlion_real from "/images/real-or-ai/real_images/merlion.jpg";
import merlion1_ai from "/images/real-or-ai/ai_images/merlion1.jpeg";
import merlion1_real from "/images/real-or-ai/real_images/merlion1.jpg";
import nuhs_ai from "/images/real-or-ai/ai_images/nuhs.png";
import nuhs_real from "/images/real-or-ai/real_images/nuhs.jpeg";
import puppy_ai from "/images/real-or-ai/ai_images/puppy.png";
import puppy_real from "/images/real-or-ai/real_images/puppy.jpg";
import supermarket_ai from "/images/real-or-ai/ai_images/supermarket.png";
import supermarket_real from "/images/real-or-ai/real_images/supermarket.jpg";
import scenary_ai from "/images/real-or-ai/ai_images/scenary.jpg";
import scenary_real from "/images/real-or-ai/real_images/scenary.jpg";
import office_ai from "/images/real-or-ai/ai_images/office.jpg";
import office_real from "/images/real-or-ai/real_images/office.jpg";
import jewel_fountain_ai from "/images/real-or-ai/ai_images/jewel_fountain.png";
import jewel_fountain_real from "/images/real-or-ai/real_images/jewel_fountain.png";
import void_deck_ai from "/images/real-or-ai/ai_images/void_deck.png";
import void_deck_real from "/images/real-or-ai/real_images/void_deck.jpeg";
import ambulance_ai from "/images/real-or-ai/ai_images/ambulance.png";
import ambulance_real from "/images/real-or-ai/real_images/ambulance.png";
import doctor_ai from "/images/real-or-ai/ai_images/doctor.jpeg";
import doctor_real from "/images/real-or-ai/real_images/doctor.jpg";
import gbtb_ai from "/images/real-or-ai/ai_images/gbtb.png";
import gbtb_real from "/images/real-or-ai/real_images/gbtb.png";
import little_india_ai from "/images/real-or-ai/ai_images/little_india.png";
import little_india_real from "/images/real-or-ai/real_images/little_india.png";
import mbs_ai from "/images/real-or-ai/ai_images/mbs.png";
import mbs_real from "/images/real-or-ai/real_images/mbs.png";
import uphill_running from "/images/real-or-ai/real_images/uphill_running.jpg";
import uphill_running_ai from "/images/real-or-ai/ai_images/uphill_running.jpg";
import uss_ai from "/images/real-or-ai/ai_images/USS.png";
import uss_real from "/images/real-or-ai/real_images/USS.png";

import { RealOrAIAnswer } from "~/constants/enum";

export interface DatasetType {
  // image string will be used as unique key
  image: string;
  answer: RealOrAIAnswer;
}

export interface RealOrAIDatasetType {
  key: number;
  ai: DatasetType;
  real: DatasetType;
}

export const dataset: RealOrAIDatasetType[] = [
  {
    key: 0,
    real: {
      image: jewel_fountain_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: jewel_fountain_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 1,
    ai: {
      image: merlion1_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: merlion1_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 2,
    real: {
      image: office_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: office_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 3,
    ai: {
      image: apt_on_fire_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: apt_on_fire_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 4,
    real: {
      image: baby_in_suit_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: baby_in_suit_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 5,
    ai: {
      image: cow_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: cow_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 6,
    real: {
      image: divers_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: divers_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 7,
    ai: {
      image: airport_tower_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: airport_tower_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 8,
    ai: {
      image: ecp_beacon_tower_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: ecp_beacon_tower_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 9,
    real: {
      image: family_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: family_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 10,
    ai: {
      image: scenary_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: scenary_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  // {
  //   key: 11,
  //   real: {
  //     image: fox_real,
  //     answer: RealOrAIAnswer.REAL,
  //   },
  //   ai: {
  //     image: fox_ai,
  //     answer: RealOrAIAnswer.AI,
  //   },
  // },
  {
    key: 12,
    ai: {
      image: kallang_river_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: kallang_river_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 13,
    real: {
      image: merlion_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: merlion_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  // {
  //   key: 14,
  //   ai: {
  //     image: nbc_ai,
  //     answer: RealOrAIAnswer.AI,
  //   },
  //   real: {
  //     image: nbc_real,
  //     answer: RealOrAIAnswer.REAL,
  //   },
  // },
  {
    key: 15,
    real: {
      image: nuhs_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: nuhs_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  {
    key: 16,
    ai: {
      image: puppy_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: puppy_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  // {
  //   key: 17,
  //   ai: {
  //     image: reporter_ai,
  //     answer: RealOrAIAnswer.AI,
  //   },
  //   real: {
  //     image: reporter_real,
  //     answer: RealOrAIAnswer.REAL,
  //   },
  // },
  // {
  //   key: 18,
  //   real: {
  //     image: reporter2_real,
  //     answer: RealOrAIAnswer.REAL,
  //   },
  //   ai: {
  //     image: reporter2_ai,
  //     answer: RealOrAIAnswer.AI,
  //   },
  // },
  {
    key: 19,
    real: {
      image: supermarket_real,
      answer: RealOrAIAnswer.REAL,
    },
    ai: {
      image: supermarket_ai,
      answer: RealOrAIAnswer.AI,
    },
  },
  // {
  //   key: 20,
  //   ai: {
  //     image: turtle_ai,
  //     answer: RealOrAIAnswer.AI,
  //   },
  //   real: {
  //     image: turtle_real,
  //     answer: RealOrAIAnswer.REAL,
  //   },
  // },
  {
    key: 21,
    ai: {
      image: void_deck_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: void_deck_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 22,
    ai: {
      image: ambulance_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: ambulance_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 23,
    ai: {
      image: doctor_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: doctor_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 24,
    ai: {
      image: gbtb_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: gbtb_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 25,
    ai: {
      image: little_india_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: little_india_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 26,
    ai: {
      image: mbs_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: mbs_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 27,
    ai: {
      image: uphill_running_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: uphill_running,
      answer: RealOrAIAnswer.REAL,
    },
  },
  {
    key: 28,
    ai: {
      image: uss_ai,
      answer: RealOrAIAnswer.AI,
    },
    real: {
      image: uss_real,
      answer: RealOrAIAnswer.REAL,
    },
  },
];
