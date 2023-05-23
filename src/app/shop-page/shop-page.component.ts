import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent {

  constructor(private cartService: CartServiceService){}

  showCart = false;


  openCart() {
    this.showCart = true;
  }


  addToCart(title: string, classCode: string,price: number) {
    const item = { title, classCode, price };
    this.cartService.addToCart(item);
  }

  

  items: any[] = [
    {
      title: 'Note Reading',
      classCode: 'HRP101',
      description: 'This is the fundamental foundation in order to play the harp successfully',
      price: 1564
    },
    {
      title: 'Harp Strings',
      classCode: 'HS102',
      description: 'Discover different types of harp strings and learn how to choose the right ones for your instrument.',
      price: 1547
    },
    {
      title: 'Famous Harpists',
      classCode: 'FH201',
      description: 'Explore the lives and music of famous harpists throughout history and be inspired by their artistry.',
      price: 1652
    },
    {
      title: 'Harp Theory',
      classCode: 'HT101',
      description: 'Master the fundamental concepts of harp theory, including scales, chords, and music notation.',
      price: 1548
    },
    {
      title: 'Harp 202',
      classCode: 'H202',
      description: 'Build upon your harp skills and delve deeper into advanced techniques and repertoire.',
      price: 1478
    },
    {
      title: '1,000 Harp Methods',
      classCode: 'HM305',
      description: 'Discover a vast collection of harp methods and study materials for all levels of proficiency.',
      price: 1248
    },
    {
      title: 'Harp Careers',
      classCode: 'HC101',
      description: 'Learn about various career paths and opportunities available for harpists in the music industry.',
      price: 1369
    },
    {
      title: 'Advanced Harp Melodies',
      classCode: 'AHM401',
      description: 'Take your melodic playing to the next level with challenging and intricate harp compositions.',
      price: 1859
    },
    {
      title: 'Harp Maintenance',
      classCode: 'HM201',
      description: 'Learn essential maintenance techniques to keep your harp in optimal condition for long-lasting performance.',
      price: 1365
    },
    {
      title: 'Harp Statistics',
      classCode: 'HS301',
      description: 'Explore statistical analysis of harp music trends and insights into the harp community.',
      price: 1874
    },
    {
      title: 'Harp Composition',
      classCode: 'HC3123',
      description: 'Unlock your creativity and learn the art of harp composition. Explore composition techniques, melody writing, and arrangement principles specific to the harp. Express your musical ideas through original compositions.',
      price: 1925
    },
    {
      title: 'Harp Ensemble',
      classCode: 'HE2222',
      description: 'Experience the joy of playing in a harp ensemble. Learn ensemble skills, collaborative performance techniques, and repertoire specifically arranged for multiple harps. Create beautiful harmonies with fellow harpists.',
      price: 1256
    },
    {
      title: 'Harp Improvisation (1)',
      classCode: 'HI1354',
      description: 'Discover the art of harp improvisation. Learn improvisational techniques, chord progressions, and creative approaches to spontaneously compose music on the harp.',
      price: 1472
    },
    {
      title: 'Harp Pedal Techniques',
      classCode: 'HPT1005',
      description: 'Master the intricate techniques of harp pedals. Learn how to effectively use pedal changes, manage complex pedal markings, and navigate challenging passages with ease.',
      price: 1687
      
    },
    {
      title: 'Historical Harp Repertoire',
      classCode: 'HHR1547',
      description: 'Explore the rich historical repertoire of the harp. Dive into music from different eras, including Baroque, Classical, Romantic, and beyond. Experience the beauty of the harp\'s historical heritage.',
      price: 1687
    },
    {
      title: 'Harp Orchestration',
      classCode: 'HO3025',
      description: 'Learn the art of harp orchestration and arranging for ensemble performances. Explore techniques for integrating the harp into orchestral compositions and creating lush textures.',
      price: 1352
    },
    {
      title: 'Harp for Healing',
      classCode: 'HH2001',
      description: 'Discover the therapeutic power of the harp. Learn how to use the harp to promote relaxation, reduce stress, and facilitate healing. Explore techniques for playing soothing and calming melodies.',
      price: 1968
    },
    {
      title: 'Harp Improvisation (2)',
      classCode: 'HI2002',
      description: 'Unlock your creativity and explore the world of harp improvisation. Learn improvisational techniques, chord progressions, and rhythmic patterns to create unique and spontaneous harp performances.',
      price: 1145
    }
  ];

 

}
