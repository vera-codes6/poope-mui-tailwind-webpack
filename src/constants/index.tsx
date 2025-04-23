import AppIcon from '@/components/AppIcon'
import { Language, NavigationItemType, QAContentType, WalletButtonType } from '@/types'
import { BsArrowDown } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'

export const languageCodes: Language[] = [
  { code: 'us', value: 'en', label: 'English' },
  { code: 'fr', value: 'fr', label: 'French' }
]

export const FAQList = [
  {
    title: 'Sitemap',
    contentList: [
      { text: 'What is Poope', link: 'expand' },
      { text: 'Buy Poope', link: '' },
      { text: 'FAQ', link: 'faq' }
    ]
  },
  {
    title: 'Foundation',
    contentList: [
      { text: 'About', link: 'about' },
      { text: 'Tokenomics', link: 'tokenomics' },
      { text: 'Roadmap', link: 'roadmap' },
      { text: 'Community', link: 'community' },
      { text: 'Blog', link: 'updating' }
    ]
  }
]

export const idList = ['hero', 'about', 'tokenomics', 'roadmap', 'expand', 'updating', 'community', 'faq']

export const BlogCardList = [
  {
    title: 'Poope Coin has no utility!',
    content:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Poo is money! Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  },
  {
    title: 'How to win with Poope',
    content:
      'Cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke...'
  },
  {
    title: 'Never been so easy to collect',
    content:
      'Indeed, Poopecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... READ MORE'
  }
]

export const QATabList = ['Frequently Asked Questions', 'Resources', "How to's", 'Documentation']

export const QAAcordionContentList: QAContentType[] = [
  {
    title: 'A hale holds nearly 30% of Poope Coin Supply! Is this true?',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... ',
    bold: 'Read more'
  },
  {
    title: 'Poope Coin has no utility!',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... ',
    bold: 'Read more'
  },
  {
    title: 'Can you put a cap on Poope Coin?',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... ',
    bold: 'Read more'
  },
  {
    title: 'Poope Coin has no developers!',
    answer:
      'Oh yes it does, and it always has! The simple fact is that money has utility - and Dogecoin is money! Indeed, Poopiecoin is one of the few cryptocurrencies that has been used for this main purpose from day one. Poopie was first meant to be a joke... ',
    bold: 'Read more'
  }
]

export const WalletButtonList: WalletButtonType[] = [
  {
    text: 'Metamask',
    startIcon: <AppIcon name='metamask' size={24} />
  },
  {
    text: 'Phantom',
    startIcon: <AppIcon name='phantom' size={24} />
  },
  {
    text: 'Solflare',
    startIcon: <AppIcon name='solflare' size={24} />
  },
  {
    text: 'More',
    startIcon: <AppIcon name='more' size={24} />,
    endIcon: <AppIcon name='down' size={20} />
  }
]

export const SideBarMenuListItems: NavigationItemType[] = [
  { link: 'dashboard', text: 'Dashboard', icon: <AppIcon name='dashboard' size={24} /> },
  { link: 'transactions', text: 'Transactions', icon: <AppIcon name='transactions' size={24} /> },
  { link: 'market', text: 'Market', icon: <AppIcon name='market' size={24} /> },
  { link: 'notification', text: 'Notification', icon: <AppIcon name='notification' size={24} /> },
  { link: 'settings', text: 'Settings', icon: <AppIcon name='settings' size={24} /> }
]

export const SideBarSubListItems: NavigationItemType[] = [
  { link: 'support', text: 'Support', icon: <AppIcon name='support' size={24} /> },
  { link: 'logout', text: 'Log Out', icon: <AppIcon name='logout' size={24} /> }
]

export const coinIntroList = [
  {
    date: 'Today',
    price: 1.2
  },
  {
    date: '7 Days',
    price: 4.3
  },
  {
    date: '30 Days',
    price: -11.8
  }
]

export const buttonList = [
  {
    text: 'Buy',
    iconElement: <IoMdAdd size={24} />
  },
  {
    text: 'Withdraw',
    iconElement: <BsArrowDown size={24} />
  },
  {
    text: 'Convert',
    iconElement: <AppIcon name='transactions' size={24} />
  }
]

export * from './routes'
export * from './chartData'
