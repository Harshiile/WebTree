import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

interface EditorProps {
  content: any;
  onContentChange: (newContent: any) => void;
}

const TemplateEditor: React.FC<EditorProps> = ({ content, onContentChange }) => {
  const handleChange = (path: string, value: string) => {
    const newContent = { ...content };
    const keys = path.split('.');
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }
    current[keys[keys.length - 1]] = value;
    
    onContentChange(newContent);
  };

  const handleImageChange = (path: string, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(path, reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <ScrollArea className="h-screen p-4 bg-white border-r">
      <div className="space-y-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Hero Section</h3>
            <div className="space-y-4">
              <div>
                <Label>Company Name</Label>
                <Input
                  value={content.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                />
              </div>
              <div>
                <Label>Hero Title</Label>
                <Input
                  value={content.hero.title}
                  onChange={(e) => handleChange('hero.title', e.target.value)}
                />
              </div>
              <div>
                <Label>Hero Description</Label>
                <Input
                  value={content.hero.description}
                  onChange={(e) => handleChange('hero.description', e.target.value)}
                />
              </div>
              <div>
                <Label>Hero Background Image</Label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageChange('hero.backgroundImage', e.target.files?.[0])}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            {content.services.map((service: any, index: number) => (
              <div key={index} className="space-y-4 mb-6">
                <h4 className="font-medium">Service {index + 1}</h4>
                <div>
                  <Label>Title</Label>
                  <Input
                    value={service.title}
                    onChange={(e) => handleChange(`services.${index}.title`, e.target.value)}
                  />
                </div>
                <div>
                  <Label>Price</Label>
                  <Input
                    value={service.price}
                    onChange={(e) => handleChange(`services.${index}.price`, e.target.value)}
                  />
                </div>
                <div>
                  <Label>Image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(`services.${index}.image`, e.target.files?.[0])}
                  />
                </div>
                {service.features.map((feature: string, featureIndex: number) => (
                  <div key={featureIndex}>
                    <Label>Feature {featureIndex + 1}</Label>
                    <Input
                      value={feature}
                      onChange={(e) => handleChange(`services.${index}.features.${featureIndex}`, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Testimonials</h3>
            {content.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="space-y-4 mb-6">
                <h4 className="font-medium">Testimonial {index + 1}</h4>
                <div>
                  <Label>Name</Label>
                  <Input
                    value={testimonial.name}
                    onChange={(e) => handleChange(`testimonials.${index}.name`, e.target.value)}
                  />
                </div>
                <div>
                  <Label>Review</Label>
                  <Input
                    value={testimonial.review}
                    onChange={(e) => handleChange(`testimonials.${index}.review`, e.target.value)}
                  />
                </div>
                <div>
                  <Label>Profile Image</Label>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(`testimonials.${index}.image`, e.target.files?.[0])}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <Label>Phone</Label>
                <Input
                  value={content.contact.phone}
                  onChange={(e) => handleChange('contact.phone', e.target.value)}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  value={content.contact.email}
                  onChange={(e) => handleChange('contact.email', e.target.value)}
                />
              </div>
              <div>
                <Label>Address</Label>
                <Input
                  value={content.contact.address}
                  onChange={(e) => handleChange('contact.address', e.target.value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default TemplateEditor;
