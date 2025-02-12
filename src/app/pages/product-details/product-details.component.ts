import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any = null;

  // Array of featured products (copy it or import it from a service)
  products = [
    // Crafts
    {
      id: 1,
      name: 'Handmade Basket',
      description: 'Locally woven basket perfect for home decor.',
      price: 5000,
      category: 'Crafts',
      image: 'assets/img/pexels-pavel-danilyuk-5788492.jpg'
    },
    {
      id: 2,
      name: 'Hand-Carved Wooden Sculpture',
      description: 'An exquisite hand-carved wooden sculpture, depicting traditional African art and culture.',
      price: 3000,
      category: 'Crafts',
      image: 'assets/img/pexels-tubarones-15403144.jpg'
    },
    {
      id: 3,
      name: 'Locally Made Clay Vase',
      description: 'Beautiful clay vase designed by local potters. Perfect for home decor.',
      price: 3500,
      category: 'Crafts',
      image: 'assets/img/pexels-musato-8304955.jpg'
    },
    {
      id: 4,
      name: 'Handcrafted Jewelry Box',
      description: 'Elegant jewelry box crafted from premium wood, featuring a traditional African design.',
      price: 3200,
      category: 'Crafts',
      image: 'assets/img/pexels-thirdman-6957322.jpg'
    },
    {
      id: 5,
      name: 'Handwoven Palm Hat',
      description: 'Traditional palm hat, woven with precision for sunny days or cultural events.',
      price: 900,
      category: 'Crafts',
      image: 'assets/img/pexels-babydov-7787591.jpg'
    },
    {
      id: 6,
      name: 'Handmade Raffia Mat',
      description: 'A durable raffia mat, woven by skilled artisans, perfect for picnics or home use.',
      price: 2500,
      category: 'Crafts',
      image: 'assets/img/pexels-arturoaez220-15018735.jpg'
    },
    {
      id: 7,
      name: 'Lagos City Handwoven Basket',
      description: 'A handcrafted basket made by artisans in Lagos. Ideal for home décor or storage.',
      price: 1200,
      category: 'Crafts',
      image: 'assets/img/pexels-eosvini-2113125.jpg'
    },
    {
      id: 8,
      name: 'Decorative Clay Pot',
      description: 'A stylish decorative pot made from natural clay, perfect for plant decor.',
      price: 4000,
      category: 'Crafts',
      image: 'assets/img/pexels-arbiansyah-sulud-1302117685-26988453.jpg'
    },
    {
      id: 9,
      name: 'Beaded Wall Hanging',
      description: 'A beautiful beaded wall hanging with intricate patterns, handmade by local artists.',
      price: 6000,
      category: 'Crafts',
      image: 'assets/img/pexels-rachel-claire-5865338.jpg'
    },
  
    // Textiles
    {
      id: 10,
      name: 'African Print Fabric',
      description: 'Vibrant and colorful African print fabric. Perfect for clothing, accessories, or home decoration.',
      price: 2500,
      category: 'Textiles',
      image: 'assets/img/pexels-thekehindeogunsanya-16565805.jpg'
    },
    {
      id: 11,
      name: 'Kente Cloth',
      description: 'A luxurious and authentic Kente cloth, perfect for ceremonial or fashion use.',
      price: 7000,
      category: 'Textiles',
      image: 'assets/img/pexels-builtbyking-11403809.jpg'
    },
    {
      id: 12,
      name: 'Tie-Dye Fabric',
      description: 'A colorful tie-dye fabric made using traditional techniques.',
      price: 1500,
      category: 'Textiles',
      image: 'assets/img/pexels-teona-swift-6851171.jpg'
    },
    {
      id: 13,
      name: 'Adire Textile',
      description: 'Hand-dyed Adire textile made using natural indigo.',
      price: 4000,
      category: 'Textiles',
      image: 'assets/img/pexels-melike-baran-407276327-29620664.jpg'
    },
    {
      id: 14,
      name: 'Traditional Headwrap',
      description: 'A beautiful and versatile headwrap made from high-quality African print fabric.',
      price: 1000,
      category: 'Textiles',
      image: 'assets/img/pexels-the-cre8ive-icon-492293783-29553407.jpg'
    },
    {
      id: 15,
      name: 'Decorative Table Runner',
      description: 'A handwoven table runner with colorful African patterns.',
      price: 3000,
      category: 'Textiles',
      image: 'assets/img/pexels-nikitaxnikitin-8148260.jpg'
    },
    {
      id: 16,
      name: 'Silk Ankara Scarf',
      description: 'A lightweight scarf made from luxurious Ankara silk.',
      price: 2000,
      category: 'Textiles',
      image: 'assets/img/pexels-wavy_-revolution-57767604-27968855.jpg'
    },
    {
      id: 17,
      name: 'Patchwork Quilt',
      description: 'A stunning patchwork quilt combining traditional and modern African designs.',
      price: 8000,
      category: 'Textiles',
      image: 'assets/img/pexels-polina-kovaleva-6786952.jpg'
    },
    {
      id: 18,
      name: 'Handwoven Wool Blanket',
      description: 'A cozy wool blanket woven by skilled artisans.',
      price: 12000,
      category: 'Textiles',
      image: 'assets/img/pexels-pavel-danilyuk-5788492.jpg'
    },
  
    // Accessories
    {
      id: 19,
      name: 'Handmade Beaded Necklace',
      description: 'A beautiful handmade beaded necklace. Perfect for special occasions.',
      price: 1500,
      category: 'Accessories',
      image: 'assets/img/pexels-arif-17298621.jpg'
    },
    {
      id: 20,
      name: 'Leather Wallet',
      description: 'A sleek, handmade leather wallet for everyday use.',
      price: 2500,
      category: 'Accessories',
      image: 'assets/img/pexels-ekrulila-27467366.jpg'
    },
    {
      id: 21,
      name: 'Coconut Shell Earrings',
      description: 'Unique earrings crafted from coconut shells.',
      price: 800,
      category: 'Accessories',
      image: 'assets/img/pexels-maria-aurora-trinchero-728737401-22757118.jpg'
    },
    {
      id: 22,
      name: 'Ankara Print Clutch',
      description: 'A fashionable clutch made from vibrant Ankara fabric.',
      price: 3000,
      category: 'Accessories',
      image: 'assets/img/cluch.jpeg'
    },
    {
      id: 23,
      name: 'Beaded Hair Accessories',
      description: 'Colorful beaded hair clips and bands for styling.',
      price: 500,
      category: 'Accessories',
      image: 'assets/img/download.jpeg'
    },
    {
      id: 24,
      name: 'Wrist Beads',
      description: 'Handmade wrist beads with traditional patterns.',
      price: 1200,
      category: 'Accessories',
      image: 'assets/img/download (1).jpeg'
    },
    {
      id: 25,
      name: 'Kente Bow Tie',
      description: 'A stylish bow tie made from authentic Kente fabric.',
      price: 2500,
      category: 'Accessories',
      image: 'assets/img/download (2).jpeg'
    },
    {
      id: 26,
      name: 'Leather Belt',
      description: 'Durable and fashionable leather belt for all outfits.',
      price: 3000,
      category: 'Accessories',
      image: 'assets/img/download (3).jpeg'
    },
    {
      id: 27,
      name: 'Beaded Hand Fan',
      description: 'A beautiful hand fan with intricate beadwork.',
      price: 2200,
      category: 'Accessories',
      image: 'assets/img/download (4).jpeg'
    },
    {
      id: 28,
      name: 'Shea Butter Moisturizer',
      description: 'Natural shea butter cream made from premium-grade shea nuts. Perfect for skin hydration.',
      price: 800,
      category: 'Beauty',
      image: 'assets/img/pexels-shkrabaanthony-6187525.jpg'
    },
    {
      id: 29,
      name: 'Organic Black Soap',
      description: 'Traditional African black soap made with natural ingredients for glowing skin.',
      price: 1200,
      category: 'Beauty',
      image: 'assets/img/download (5).jpeg'
    },
    {
      id: 30,
      name: 'Handmade Lip Balm',
      description: 'Natural lip balm infused with shea butter and honey for soft, hydrated lips.',
      price: 500,
      category: 'Beauty',
      image: 'assets/img/download (6).jpeg'
    },
    {
      id: 31,
      name: 'Herbal Hair Oil',
      description: 'A blend of essential oils to promote hair growth and scalp health.',
      price: 1500,
      category: 'Beauty',
      image: 'assets/img/images.jpeg'
    },
    {
      id: 32,
      name: 'Coconut Body Scrub',
      description: 'Exfoliating body scrub made with organic coconut oil for smooth skin.',
      price: 1000,
      category: 'Beauty',
      image: 'assets/img/download (7).jpeg'
    },
    {
      id: 33,
      name: 'Aloe Vera Face Mask',
      description: 'Hydrating and soothing aloe vera face mask for clear skin.',
      price: 700,
      category: 'Beauty',
      image: 'assets/img/download (8).jpeg'
    },
    {
      id: 34,
      name: 'Beaded Compact Mirror',
      description: 'A compact mirror adorned with traditional beadwork for beauty on the go.',
      price: 1800,
      category: 'Beauty',
      image: 'assets/img/download (9).jpeg'
    },
    {
      id: 35,
      name: 'Handcrafted Soap Bars',
      description: 'A set of handmade soap bars in various scents, perfect for gifting.',
      price: 2000,
      category: 'Beauty',
      image: 'assets/img/download (10).jpeg'
    },
    {
      id: 36,
      name: 'Herbal Bath Salts',
      description: 'Relaxing bath salts infused with herbs for a spa-like experience.',
      price: 2500,
      category: 'Beauty',
      image: 'assets/img/images (1).jpeg'
    },
    {
      id: 37,
      name: 'Organic Honey',
      description: '100% organic honey sourced directly from Nigerian farmers. A natural sweetener.',
      price: 1000,
      category: 'Food',
      image: 'assets/img/pexels-kindelmedia-7667900.jpg'
    },
    {
      id: 38,
      name: 'Locally Roasted Coffee',
      description: 'Rich and flavorful coffee beans grown by Nigerian farmers.',
      price: 2000,
      category: 'Food',
      image: 'assets/img/pexels-maksgelatin-4815950.jpg'
    },
    {
      id: 39,
      name: 'Traditional Nigerian Spices',
      description: 'A set of authentic Nigerian spices for suya, pepper soup, and more.',
      price: 1500,
      category: 'Food',
      image: 'assets/img/pexels-owoeye-taiwo-bisola-1677270881-27874900.jpg'
    },
    {
      id: 40,
      name: 'Dried Fish Pack',
      description: 'Locally sourced dried fish, perfect for soups and stews.',
      price: 2500,
      category: 'Food',
      image: 'assets/img/download (11).jpeg'
    },
    {
      id: 41,
      name: 'Cashew Nuts',
      description: 'Premium quality cashew nuts roasted to perfection.',
      price: 3000,
      category: 'Food',
      image: 'assets/img/images (2).jpeg'
    },
    {
      id: 42,
      name: 'Palm Oil Bottle',
      description: 'Freshly pressed red palm oil for traditional Nigerian dishes.',
      price: 1500,
      category: 'Food',
      image: 'assets/img/download (12).jpeg'
    },
    {
      id: 43,
      name: 'Sweet Potato Chips',
      description: 'Crispy and delicious sweet potato chips, a perfect snack.',
      price: 800,
      category: 'Food',
      image: 'assets/img/download (13).jpeg'
    },
    {
      id: 44,
      name: 'Plantain Flour',
      description: 'Gluten-free plantain flour for baking and cooking.',
      price: 2000,
      category: 'Food',
      image: 'assets/img/download (14).jpeg'
    },
    {
      id: 45,
      name: 'Yam Flour Pack',
      description: 'Traditional yam flour, perfect for making amala.',
      price: 3000,
      category: 'Food',
      image: 'assets/img/download (15).jpeg'
    },
    {
      id: 46,
      name: 'Ankara Maxi Dress',
      description: 'A stunning Ankara print maxi dress designed for elegance and comfort.',
      price: 12000,
      category: 'Fashion',
      image: 'assets/img/download (16).jpeg'
    },
    {
      id: 47,
      name: 'Handmade Leather Sandals',
      description: 'Durable and stylish leather sandals handcrafted by local artisans.',
      price: 4500,
      category: 'Fashion',
      image: 'assets/img/pexels-diego-f-parra-33199-25255085.jpg'
    },
    {
      id: 48,
      name: 'Kente Scarf',
      description: 'A vibrant handwoven Kente scarf, perfect for accessorizing your wardrobe.',
      price: 3500,
      category: 'Fashion',
      image: 'assets/img/download (17).jpeg'
    },
    {
      id: 49,
      name: 'Beaded Earrings',
      description: 'Intricately designed beaded earrings made by Nigerian artisans.',
      price: 1200,
      category: 'Fashion',
      image: 'assets/img/download (18).jpeg'
    },
    {
      id: 50,
      name: 'Handmade Beaded Necklace',
      description: 'A beautiful handmade necklace crafted with vibrant beads for any occasion.',
      price: 3000,
      category: 'Fashion',
      image: 'assets/img/pexels-arif-17298621.jpg'
    },
    {
      id: 51,
      name: 'Dashiki Shirt',
      description: 'Traditional Dashiki shirt made with high-quality fabric for a bold look.',
      price: 6000,
      category: 'Fashion',
      image: 'assets/img/download (19).jpeg'
    },
    {
      id: 52,
      name: 'African Print Headwrap',
      description: 'Colorful African print headwrap for stylish and versatile looks.',
      price: 1500,
      category: 'Fashion',
      image: 'assets/img/download (20).jpeg'
    },
    {
      id: 53,
      name: 'Handwoven Tote Bag',
      description: 'Eco-friendly tote bag made with handwoven traditional materials.',
      price: 5000,
      category: 'Fashion',
      image: 'assets/img/download (21).jpeg'
    },
    {
      id: 54,
      name: 'Embroidered Kaftan',
      description: 'Elegant embroidered kaftan for a chic and sophisticated look.',
      price: 15000,
      category: 'Fashion',
      image: 'assets/img/download (22).jpeg'
    },
        
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.product = this.products[+id]; // Use the ID to retrieve the product
    }
  }
}
