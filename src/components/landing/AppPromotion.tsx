
import React from 'react';
import { QrCode, AppleIcon, SmartphoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AppPromotion = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <div className="relative order-2 md:order-1">
            <div className="absolute top-0 right-0 w-[80%] h-[80%] bg-secondary/30 rounded-full blur-3xl -z-10" />
            
            <div className="relative z-10 flex justify-center">
              <div className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-neutral-800 shadow-2xl p-3 relative">
                {/* Phone Screen */}
                <div className="w-full h-full bg-neutral-100 rounded-[2.5rem] overflow-hidden">
                  {/* Mockup App Screen */}
                  <div className="w-full h-full bg-white flex flex-col">
                    {/* App Header */}
                    <div className="bg-primary px-5 py-6 text-white">
                      <div className="text-xs font-medium">Delivery to</div>
                      <div className="flex justify-between items-center mt-1">
                        <div className="font-medium">123 Main Street</div>
                        <div className="text-xs bg-white/20 px-2 py-1 rounded-full">Change</div>
                      </div>
                    </div>
                    
                    {/* Search Bar */}
                    <div className="p-4">
                      <div className="bg-neutral-100 rounded-full px-4 py-3 flex items-center">
                        <SmartphoneIcon className="h-4 w-4 text-neutral-400 mr-2" />
                        <div className="text-sm text-neutral-400">Search for restaurants...</div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 flex-1">
                      <div className="text-sm font-semibold mb-3">Popular Near You</div>
                      
                      {/* Restaurant Cards */}
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="bg-neutral-50 rounded-xl overflow-hidden">
                            <div className="h-24 bg-neutral-200 relative">
                              <div className="absolute bottom-2 left-2 bg-white text-xs px-2 py-1 rounded-full shadow-sm">
                                25-35 min
                              </div>
                            </div>
                            <div className="p-3">
                              <div className="font-medium text-sm">Restaurant Name</div>
                              <div className="text-xs text-neutral-500 mt-1 flex items-center">
                                <span>★★★★☆</span>
                                <span className="mx-1">•</span>
                                <span>1.2 mi</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="bg-white border-t border-neutral-100 py-3 px-6 flex justify-between">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <SmartphoneIcon className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-[10px] mt-1 text-primary">Home</span>
                      </div>
                      
                      {['Search', 'Orders', 'Profile'].map(item => (
                        <div key={item} className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center">
                            <SmartphoneIcon className="h-3 w-3 text-neutral-400" />
                          </div>
                          <span className="text-[10px] mt-1 text-neutral-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Phone Notch */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1/3 h-5 bg-black rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading leading-tight">
              Get The FoodDash App <br />For Faster Ordering
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Download our mobile app for a smoother experience, exclusive mobile deals, and push notifications for order updates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-black hover:bg-black/90 flex items-center gap-2 px-6">
                <AppleIcon className="h-5 w-5" />
                App Store
              </Button>
              
              <Button className="bg-black hover:bg-black/90 flex items-center gap-2 px-6">
                <SmartphoneIcon className="h-5 w-5" />
                Google Play
              </Button>
            </div>
            
            <div className="flex items-center gap-4 p-4 border border-border rounded-xl bg-card max-w-sm">
              <div className="h-20 w-20 bg-white p-2 rounded-lg shadow flex items-center justify-center">
                <QrCode className="h-full w-full text-black" />
              </div>
              
              <div>
                <div className="font-medium mb-1">Scan to download</div>
                <div className="text-sm text-muted-foreground">Use your phone's camera to scan and download directly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
