import React from "react";
import { Card } from "../ui/card";
import FeaturedPost from "./FeaturedPost";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div className="lg:col-span-1">
      <Card className="p-6 mb-6">
        <h3 className="text-2xl font-bold mb-4">ZORIK</h3>
        <p className="text-gray-600 mb-4">
          Welcome! Feel free to dive and match these infographics based on your
          interests and the preferences of your target audience. Health &
          Wellness is a broad topic.
        </p>
        <div className="flex justify-between text-center mb-4">
          <div>
            <div className="font-bold">223K</div>
            <div className="text-sm text-gray-600">Followers</div>
          </div>
          <div>
            <div className="font-bold">36.2K</div>
            <div className="text-sm text-gray-600">Following</div>
          </div>
          <div>
            <div className="font-bold">223K</div>
            <div className="text-sm text-gray-600">Posts</div>
          </div>
        </div>
      </Card>
      <Card className="p-6 mb-6">
        <h4 className="font-bold mb-4 text-orange-500">Featured Post</h4>
        <div className="space-y-4">
          <FeaturedPost />
          <FeaturedPost />
          <FeaturedPost />
          <FeaturedPost />
        </div>
      </Card>

      <Card className="p-6 mb-6">
        <h4 className="font-bold mb-4">Discover By Tags</h4>
        <Tags/>
      </Card>

      <Card className="p-6">
        <div className="text-center">
          <h4 className="font-bold mb-2">Adleo Digital Agency &</h4>
          <h4 className="font-bold mb-4">Creative Portfolio Website</h4>
          <div className="bg-gray-100 p-4 rounded mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold">28+</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-gray-600">Homepage</div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
