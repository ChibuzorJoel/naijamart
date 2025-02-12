import { AfterViewInit, Component, ViewChild } from '@angular/core';
declare var bootstrap: any;
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit{
    // Sample data
    featuredProducts = [
      { 
        name: 'Handmade Beaded Necklace', 
        description: 'A beautiful handmade beaded necklace, crafted by local artisans using traditional techniques. Perfect for special occasions or daily wear.', 
        price: 1500, 
        imageUrl: '../../../assets/img/pexels-arif-17298621.jpg' 
      },
      { 
        name: 'Organic Honey', 
        description: '100% organic honey sourced directly from Nigerian farmers. A natural sweetener, rich in antioxidants and vitamins.', 
        price: 1000, 
        imageUrl: '../../../assets/img/pexels-kindelmedia-7667900.jpg' 
      },
      { 
        name: 'Lagos City Handwoven Basket', 
        description: 'A handcrafted basket made by artisans in Lagos, showcasing intricate weaving techniques passed down through generations. Ideal for home décor or storage.', 
        price: 1200, 
        imageUrl: '../../../assets/img/pexels-eosvini-2113125.jpg' 
      },
      { 
        name: 'African Print Fabric', 
        description: 'Vibrant and colorful African print fabric, perfect for clothing, accessories, or home decoration. Made with high-quality cotton.', 
        price: 2500, 
        imageUrl: '../../../assets/img/pexels-thekehindeogunsanya-16565805.jpg' 
      },
      { 
        name: 'Shea Butter Moisturizer', 
        description: 'Natural shea butter cream made from premium-grade shea nuts. Perfect for skin hydration and nourishment.', 
        price: 800, 
        imageUrl: '../../../assets/img/pexels-shkrabaanthony-6187525.jpg' 
      },
      { 
        name: 'Hand-Carved Wooden Sculpture', 
        description: 'An exquisite hand-carved wooden sculpture, depicting traditional African art and culture. Ideal as a centerpiece or gift.', 
        price: 3000, 
        imageUrl: '../../../assets/img/pexels-tubarones-15403144.jpg' 
      },
      { 
        name: 'Locally Roasted Coffee', 
        description: 'Rich and flavorful coffee beans, grown and roasted by local farmers in Nigeria. A perfect blend for coffee lovers.', 
        price: 2000, 
        imageUrl: '../../../assets/img/pexels-maksgelatin-4815950.jpg' 
      },
      { 
        name: 'Traditional Nigerian Spices', 
        description: 'A set of authentic Nigerian spices to enhance your cooking experience. Includes suya spice, pepper soup mix, and more.', 
        price: 1500, 
        imageUrl: '../../../assets/img/pexels-owoeye-taiwo-bisola-1677270881-27874900.jpg' 
      },
      { 
        name: 'Handmade Leather Sandals', 
        description: 'Stylish and durable leather sandals, handcrafted by local artisans for ultimate comfort and elegance.', 
        price: 2200, 
        imageUrl: '../../../assets/img/pexels-diego-f-parra-33199-25255085.jpg' 
      },
      
    ];
    
    paginatedProducts = this.featuredProducts.slice(0, 3); // Initial page data

    @ViewChild('paginator') paginator!: MatPaginator;
  
    ngOnInit(): void {
      this.startAutoPagination();
    }
  
    onPageChange(event: any): void {
      const startIndex = event.pageIndex * event.pageSize;
      const endIndex = startIndex + event.pageSize;
      this.paginatedProducts = this.featuredProducts.slice(startIndex, endIndex);
    }
  
    startAutoPagination(): void {
      setInterval(() => {
        if (this.paginator) {
          const nextPage = (this.paginator.pageIndex + 1) % Math.ceil(this.featuredProducts.length / this.paginator.pageSize);
          this.paginator.pageIndex = nextPage;
          this.onPageChange({ pageIndex: nextPage, pageSize: this.paginator.pageSize });
        }
      }, 3000); // Adjust interval time (5000ms = 5 seconds)
    }
   
   
    categories = [
      { name: 'Fashion', imageUrl: '../../../assets/img/lesly-juarez-egEMG-SafrY-unsplash.jpg' },
      { name: 'Electronics', imageUrl: '../../../assets/img/YMZGvcVYBXkhlH9XoW79JGZ5SJ9Q0A896Ce9UQVy.jpg' },
      // Add more categories here
    ];
  
    testimonials = [
      { user: 'John Doe', text: 'Great products, fast delivery!' },
      { user: 'Jane Smith', text: 'Excellent customer service and quality.' },
    ];
  
    searchQuery = '';
    priceRange = 'low';
    selectedCategory = 'Electronics';
  
    // Methods
    searchProducts() {
      console.log('Searching for:', this.searchQuery);
      console.log('Price Range:', this.priceRange);
      console.log('Category:', this.selectedCategory);
    }
    ngAfterViewInit(): void {
      const carouselElement = document.querySelector('#carouselExampleCaptions');
      new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Automatically change slides every 3 seconds
        ride: 'carousel',
        wrap: true // Allow cycling to the first slide after the last
      });
    }
    
}
