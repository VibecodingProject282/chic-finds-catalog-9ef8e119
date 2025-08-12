import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
        >
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100">
                        {product.image_url ? (
                            <img
                                src={product.image_url}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                    <ShoppingCart className="w-8 h-8 text-gray-400" />
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {!product.in_stock && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Badge variant="secondary" className="bg-white/90 text-gray-800">
                                Out of Stock
                            </Badge>
                        </div>
                    )}
                    
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">4.8</span>
                    </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                        {product.category && (
                            <Badge 
                                variant="outline" 
                                className="text-xs font-medium text-gray-600 border-gray-200"
                            >
                                {product.category}
                            </Badge>
                        )}
                        
                        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-tight">
                            {product.name}
                        </h3>
                        
                        {product.description && (
                            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                {product.description}
                            </p>
                        )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-gray-900">
                                ${product.price?.toFixed(2)}
                            </span>
                            <span className="text-sm text-gray-500 line-through">
                                ${(product.price * 1.2)?.toFixed(2)}
                            </span>
                        </div>
                        
                        <Button 
                            size="sm"
                            disabled={!product.in_stock}
                            className="bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}