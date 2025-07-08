import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";


export const BlogCard = () => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src="/1.png"
          alt="Fashion confidence"
          fill
          className="object-cover"
        />
        <Badge className="absolute top-4 left-4 bg-teal-500 text-white">
          Fashion
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
          <span>Robert Sunmary</span>
          <span>•</span>
          <span>15 Jan, 2024</span>
        </div>
        <h3 className="font-semibold mb-2">
          Elevate Your Style with Confidence
        </h3>
      </CardContent>
    </Card>
  );
};
