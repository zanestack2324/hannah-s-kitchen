const imgPath = "calabar foods and their names - Google Search/";
const menuData = {
  flagship: [
    { name: 'Edikang Ikong Special', desc: 'Fresh Ugu + Waterleaf + Dry Fish + Snail + Chicken. No water. Proper palm oil finish. World\'s Best.', price: '₦3,800', tag: 'World\'s Best', img: imgPath + 'imgi_368_Edikaikong_npgomc.jpg' },
    { name: 'Afang Soup', desc: 'Shredded Okazi + Waterleaf, rich beef stock, periwinkle.', price: '₦3,600', tag: 'Classic', img: imgPath + 'imgi_373_afang-soup.jpg' },
    { name: 'Afia Efere White Soup', desc: 'Light, peppery, original Ibibio style. No oil, all flavor.', price: '₦3,400', tag: 'Traditional', img: imgPath + 'imgi_401_afia-efere-afrolems.jpg' },
    { name: 'Banga Soup', desc: 'Fresh banga nut, no concentrate. Native spices.', price: '₦3,500', tag: 'Akwa Ibom', img: imgPath + 'imgi_389_Abak-atama.jpg' },
    { name: 'Atama Soup', desc: 'Sweet, aromatic, with periwinkle. Delta style.', price: '₦4,200', tag: 'Special', img: imgPath + 'imgi_386_e7d91700e7e4d7cb2badd22e5f7fdb99.png' },
    { name: 'Fisherman Soup', desc: 'Mixed seafood, native pepper. A taste of the river.', price: '₦5,000', tag: 'Premium', img: imgPath + 'imgi_424_Fisherman-Soup-1.jpg' },
  ],
  swallow: [
    { name: 'Cassava Fufu', desc: 'Classic smooth, fermented, stretchy. Premium cassava.', price: '₦600 / wrap', tag: 'Classic', img: imgPath + 'imgi_105_images.jpg' },
    { name: 'Plantain Fufu', desc: 'Green/ripe plantain blend. High fiber, low glycemic, smooth.', price: '₦600 / wrap', tag: 'Innovation', img: imgPath + 'imgi_111_images.jpg' },
    { name: 'Oat Fufu', desc: '100% oats, no additives. Diabetic-friendly, protein-rich.', price: '₦700 / wrap', tag: 'Health', img: imgPath + 'imgi_126_images.jpg' },
    { name: 'Pounded Yam', desc: 'Real yam, pounded hot. No shortcuts, no flour mix.', price: '₦700 / wrap', tag: 'Traditional', img: imgPath + 'imgi_131_images.jpg' },
    { name: 'Potato Swallow', desc: 'Irish + sweet potato blend. Low-GI, diabetic-friendly.', price: '₦700 / wrap', tag: 'Low-GI', img: imgPath + 'imgi_137_images.jpg' },
    { name: 'Cauliflower Pounded Yam', desc: 'Zero carb, keto-friendly. Tastes like yam, lighter on body.', price: '₦800 / wrap', tag: 'Keto', img: imgPath + 'imgi_142_images.jpg' },
    { name: 'Delta Garri Red Garri', desc: 'Ijebu premium garri, red palm oil mix. Instant for offices.', price: '₦500 / wrap', tag: 'Budget', img: imgPath + 'imgi_146_images.jpg' },
  ],
  pepper: [
    { name: 'Oxtail Pepper Soup', desc: 'King of Pots. Tender cow tail, bone marrow, native spices. Slow cooked 3hrs.', price: '₦6,500 – ₦22,000', tag: 'King of Pots', img: imgPath + 'imgi_167_images.jpg' },
    { name: 'Assorted Meat Pepper Soup', desc: 'Shaki, kpomo, liver, kidney, round cut. Loaded with utazi.', price: '₦5,500 – ₦18,000', tag: 'Mixed Meat', img: imgPath + 'imgi_169_images.jpg' },
    { name: 'Catfish Pepper Soup', desc: 'Point & Kill style. Fresh catfish, thick spicy broth.', price: '₦5,000 – ₦17,000', tag: 'Fresh Fish', img: imgPath + 'imgi_175_images.jpg' },
    { name: 'Beef Pepper Soup', desc: 'Classic hot pot. Tender beef, peppery broth, scent leaves.', price: '₦4,500 – ₦15,000', tag: 'Classic', img: imgPath + 'imgi_191_images.jpg' },
    { name: 'Fisherman\'s Pepper Soup', desc: 'Mixed fish, prawns, crab, native pepper + ginger.', price: '₦6,000 – ₦20,000', tag: 'Seafood', img: imgPath + 'imgi_195_images.jpg' },
    { name: 'Vegetarian Spice Pepper Soup', desc: 'Mushrooms, mixed veg, tofu, hot spices. All flavor.', price: '₦4,000 – ₦13,000', tag: 'Vegan', img: imgPath + 'imgi_201_images.jpg' },
  ],
  proteins: [
    { name: 'Peppered Turkey', desc: 'Big, juicy, grilled then peppered.', price: '₦4,500 / pc', tag: 'Premium', img: imgPath + 'imgi_21_images.jpg' },
    { name: 'Grilled Croaker Fish', desc: 'Point & kill, fresh. Whole or portion.', price: '₦2,500 / fish', tag: 'Fresh Catch', img: imgPath + 'imgi_22_images.jpg' },
    { name: 'Chicken (Local)', desc: 'Well-cooked local or broiler chicken.', price: '₦1,200 / pc', tag: 'Classic', img: imgPath + 'imgi_228_images.jpg' },
    { name: 'Goat Meat', desc: 'Soft, peppery, bone-in.', price: '₦1,800 / pc', tag: 'Traditional', img: imgPath + 'imgi_23_images.jpg' },
    { name: 'Snails (Jumbo)', desc: 'Well cleaned, 6 pieces.', price: '₦3,200 / 6pcs', tag: 'Delicacy', img: imgPath + 'imgi_245_images.jpg' },
    { name: 'Assorted Meat', desc: 'Shaki + Kpomo + Liver + Kidney. Loaded portion.', price: '₦3,200', tag: 'Mixed', img: imgPath + 'imgi_25_images.jpg' },
  ],
  rice: [
    { name: 'Naija Jollof Rice', desc: 'Smoky party style. Comes with 2 proteins.', price: '₦2,000 – ₦3,500', tag: 'Party Size', img: imgPath + 'imgi_26_images.jpg' },
    { name: 'Fried Rice', desc: 'Mixed veg + liver. Party favorite.', price: '₦2,200 – ₦3,800', tag: 'Classic', img: imgPath + 'imgi_262_images.jpg' },
    { name: 'Coconut Rice', desc: 'Creamy, aromatic. A Yoruba special.', price: '₦2,200 – ₦3,800', tag: 'Aromatic', img: imgPath + 'imgi_29_images.jpg' },
    { name: 'Rice & Beans', desc: 'Palm oil stew. Hearty and filling.', price: '₦2,000 – ₦3,500', tag: 'Hearty', img: imgPath + 'imgi_291_images.jpg' },
    { name: 'Ofada Rice + Ayamase', desc: 'Green pepper stew with assorted meat.', price: '₦3,800 – ₦4,500', tag: 'Special', img: imgPath + 'imgi_303_images.jpg' },
    { name: 'Basmati Rice', desc: 'Plain, fluffy. Perfect with any soup.', price: '₦1,800 – ₦3,200', tag: 'Light', img: imgPath + 'imgi_309_images.jpg' },
  ],
  calabar: [
    { name: 'Ekpang Nkukwo', desc: 'Grated cocoyam wrapped in cocoyam leaves, cooked in palm nut cream. A Calabar delicacy.', price: '₦3,800', tag: 'Heritage', img: imgPath + 'imgi_364_Ekpang-Nkukwo-1.jpg' },
    { name: 'Editan Soup', desc: 'Dark leafy vegetable soup, rich traditional flavours with assorted meat and fish.', price: '₦3,600', tag: 'Traditional', img: imgPath + 'imgi_376_editan_soup_jsupwt.jpg' },
    { name: 'Otong Soup', desc: 'Garden egg leaf soup with uziza. Smooth, aromatic, and utterly delicious.', price: '₦3,400', tag: 'Garden Fresh', img: imgPath + 'imgi_399_otong-soup-21-1.jpg' },
    { name: 'Ekoki', desc: 'Steamed cocoyam pudding with greens and crayfish. A Calabar staple.', price: '₦2,800', tag: 'Steamed', img: imgPath + 'imgi_404_Ekoki-1.jpg' },
    { name: 'Ayamase Stew', desc: 'Green pepper (designer) stew with assorted meat. Ofada favourite.', price: '₦4,500', tag: 'Designer Stew', img: imgPath + 'imgi_397_ayamase.jpg' },
    { name: 'Buka Stew (Chicken)', desc: 'Rich, dark Nigerian chicken stew. Slow-cooked to perfection.', price: '₦3,800', tag: 'Buka Style', img: imgPath + 'imgi_382_Nigerian-Live-Chicken-Stew-Nigeria-Food-Buka-Stew-Nigeria-Soup-Calabar-Chef-Native-Soup-naija-home-food-Lagos-personal-chef-Ama-Cuisine-Ecstasy-Foods.jpg' },
  ]
};

function getItemBySlug(slug) {
  for (const cat in menuData) {
    for (const item of menuData[cat]) {
      const itemSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      if (itemSlug === slug) return item;
    }
  }
  return null;
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
