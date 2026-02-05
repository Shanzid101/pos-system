
import { Category } from './types';

export const INVENTORY_STRUCTURE: Category[] = [
  {
    id: 'bags',
    name: 'Ladies Bags',
    subcategories: [
      { id: 'hand', name: 'Hand Bag' },
      { id: 'shoulder', name: 'Shoulder Bag' },
      { id: 'tote', name: 'Tote' },
      { id: 'crossbody', name: 'Crossbody' },
      { id: 'sling', name: 'Sling' },
      { id: 'backpack', name: 'Backpack' },
      { id: 'clutch', name: 'Clutch' },
      { id: 'party', name: 'Party' },
      { id: 'office', name: 'Office' },
      { id: 'wallet', name: 'Wallet/Purse' },
      { id: 'travel', name: 'Travel Bag' }
    ],
    attributes: ['Material', 'Size']
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics & Beauty',
    subcategories: [
      { 
        id: 'face', 
        name: 'Face', 
        subcategories: [
          { id: 'foundation', name: 'Foundation' },
          { id: 'powder', name: 'Powder' }
        ]
      },
      { 
        id: 'eyes', 
        name: 'Eyes', 
        subcategories: [
          { id: 'kajal', name: 'Kajal' },
          { id: 'mascara', name: 'Mascara' }
        ]
      },
      { id: 'lips', name: 'Lips' },
      { id: 'nails', name: 'Nails' },
      { id: 'skin', name: 'Skin Care' },
      { id: 'hair', name: 'Hair Care' },
      { id: 'tools', name: 'Beauty Tools' }
    ]
  },
  {
    id: 'electric',
    name: 'Electric Items',
    subcategories: [
      { id: 'smart', name: 'Smart Watches' },
      { id: 'digital', name: 'Digital Watches' },
      { id: 'analog', name: 'Analog Watches' }
    ],
    filters: ['Gender', 'Rechargeable', 'Warranty']
  },
  {
    id: 'gifts',
    name: 'Gift Items',
    subcategories: [
      { id: 'decorative', name: 'Decorative (Vases, Flowers)' },
      { id: 'personalized', name: 'Personalized (Mugs, Frames)' },
      { id: 'fashion', name: 'Fashion Gifts (Wallets, Sunglasses)' },
      { id: 'occasion', name: 'Occasion-based (Birthday, Eid)' }
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Gifts',
    subcategories: [
      { id: 'pens', name: 'Pen sets' },
      { id: 'diaries', name: 'Diaries' },
      { id: 'desk', name: 'Desk Decor' }
    ]
  }
];

export const CASHFLOW_DATA = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 2000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

export const PURCHASE_POS_DATA = [
  { name: 'Sat', purchase: 400, pos: 240 },
  { name: 'Sun', purchase: 300, pos: 139 },
  { name: 'Mon', purchase: 200, pos: 980 },
  { name: 'Tue', purchase: 278, pos: 390 },
  { name: 'Wed', purchase: 189, pos: 480 },
  { name: 'Thu', purchase: 239, pos: 380 },
  { name: 'Fri', purchase: 349, pos: 430 },
];
