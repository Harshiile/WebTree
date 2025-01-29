import React, { useState } from 'react';
import Theme_1 from '@/components/Theme_1';
import TemplateEditor from '@/components/TemplateEditor';

const Index = () => {
  const [content, setContent] = useState({
    companyName: "SparkleWash",
    hero: {
      title: "Your Car Deserves The Best Care",
      description: "Professional car washing and detailing services that make your vehicle shine",
      backgroundImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=1800"
    },
    services: [
      {
        title: "Exterior Wash",
        price: "$29.99",
        image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80&w=800",
        features: ["Hand wash", "Wheel cleaning", "Window cleaning", "Tire dressing"]
      },
      {
        title: "Interior Detail",
        price: "$49.99",
        image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&q=80&w=800",
        features: ["Vacuum", "Dashboard cleaning", "Seat cleaning", "Floor mat washing"]
      },
      {
        title: "Full Detail",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1600964373031-f0b65565f354?auto=format&fit=crop&q=80&w=800",
        features: ["Exterior wash", "Interior detail", "Paint protection", "Ceramic coating"]
      }
    ],
    testimonials: [
      {
        name: "John Smith",
        review: "The best car wash service I've ever experienced. My car looks brand new every time!",
        rating: 5,
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100"
      },
      {
        name: "Sarah Johnson",
        review: "Exceptional service and attention to detail. The team is professional and friendly.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
      },
      {
        name: "Mike Williams",
        review: "Great value for money. The monthly subscription package is perfect for my needs.",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
      }
    ],
    contact: {
      phone: "(555) 123-4567",
      email: "info@sparklewash.com",
      address: "123 Wash Street, City, State 12345"
    }
  });

  return (
    <div className="flex">
      <div className="w-1/4 min-w-[300px]">
        <TemplateEditor content={content} onContentChange={setContent} />
      </div>
      <div className="flex-1">
        <Theme_1 content={content} />
      </div>
    </div>
  );
};

export default Index;
