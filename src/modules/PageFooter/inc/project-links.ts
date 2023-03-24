import FullLogoIcon from '@components/icons/FullLogoIcon.vue';
import FlatfyIcon from '@components/icons/FlatfyIcon.vue';
import RieltorIcon from '@components/icons/RieltorIcon.vue';
import BirdIcon from '@components/icons/BirdIcon.vue';
import KorterIcon from '@components/icons/KorterIcon.vue';
import REDIcon from '@components/icons/REDIcon.vue';
import DobovoIcon from '@components/icons/DobovoIcon.vue';

interface Link {
    link: string,
    icon: Ht,
    description: string
}

export const projectLinks: Array<Link> = [
  {
    link: 'https://misto.lun.ua/',
    icon: FullLogoIcon,
    description: 'дослідження міського простору'
  },
  {
    link: 'https://flatfy.ua/uk',
    icon: FlatfyIcon,
    description: 'оренда і продаж від власника'
  },
  {
    link: 'https://rieltor.ua/',
    icon: RieltorIcon,
    description: 'оренда и продаж на вторинці'
  },
  {
    link: 'https://apps.apple.com/app/apple-store/id1446261104?pt=102173849&ct=lun-footer&mt=8',
    icon: BirdIcon,
    description: 'кайфовий iOS-додаток оренди квартир у Києві'
  },
  {
    link: 'https://korter.com/',
    icon: KorterIcon,
    description: 'квартири у світі від забудовника'
  },
  {
    link: 'https://redcommunity.ua/',
    icon: REDIcon,
    description: 'спільнота девелоперів житлових проектів'
  },
  {
    link: 'https://www.dobovo.com/ua/',
    icon: DobovoIcon,
    description: 'подобова оренда'
  }
];
