"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

// Extended dummy data
const applications = [
  {
    id: 1,
    company: "Bearable",
    campaignName: "Make It Bearable!",
    giftedValue: 40.0,
    applicationCloseDate: "2024-11-15",
    type: "paid",
    status: "Applied",
  },
  {
    id: 2,
    company: "TechCo",
    campaignName: "Tech Gadget Review",
    giftedValue: 150.0,
    applicationCloseDate: "2024-11-30",
    type: "gifted",
    status: "Saved",
  },
  {
    id: 3,
    company: "FitLife",
    campaignName: "Fitness Challenge",
    giftedValue: 200.0,
    applicationCloseDate: "2024-12-01",
    type: "paid",
    status: "Booked",
  },
  {
    id: 4,
    company: "NaturalGlow",
    campaignName: "Organic Skincare Line",
    giftedValue: 100.0,
    applicationCloseDate: "2024-11-20",
    type: "gifted",
    status: "Unsuccessful",
  },
  {
    id: 5,
    company: "Wanderlust",
    campaignName: "Travel Vlog Series",
    giftedValue: 300.0,
    applicationCloseDate: "2024-12-15",
    type: "paid",
    status: "Invited",
  },
  {
    id: 6,
    company: "GreenEats",
    campaignName: "Sustainable Cooking",
    giftedValue: 75.0,
    applicationCloseDate: "2024-12-10",
    type: "gifted",
    status: "Applied",
  },
  {
    id: 7,
    company: "PetPals",
    campaignName: "Happy Pets Campaign",
    giftedValue: 50.0,
    applicationCloseDate: "2024-11-25",
    type: "paid",
    status: "Saved",
  },
  {
    id: 8,
    company: "BookWorm",
    campaignName: "Reading Challenge",
    giftedValue: 25.0,
    applicationCloseDate: "2024-12-05",
    type: "gifted",
    status: "Booked",
  },
  {
    id: 9,
    company: "ArtisanCrafts",
    campaignName: "Handmade Showcase",
    giftedValue: 80.0,
    applicationCloseDate: "2024-11-18",
    type: "paid",
    status: "Unsuccessful",
  },
  {
    id: 10,
    company: "EcoFashion",
    campaignName: "Sustainable Style",
    giftedValue: 120.0,
    applicationCloseDate: "2024-12-20",
    type: "gifted",
    status: "Invited",
  },
  {
    id: 11,
    company: "MusicMasters",
    campaignName: "Indie Artist Spotlight",
    giftedValue: 90.0,
    applicationCloseDate: "2024-12-08",
    type: "paid",
    status: "Applied",
  },
  {
    id: 12,
    company: "CoffeeLovers",
    campaignName: "Brew at Home",
    giftedValue: 60.0,
    applicationCloseDate: "2024-11-22",
    type: "gifted",
    status: "Saved",
  },
  {
    id: 13,
    company: "YogaLife",
    campaignName: "Mindful Living",
    giftedValue: 110.0,
    applicationCloseDate: "2024-12-12",
    type: "paid",
    status: "Booked",
  },
  {
    id: 14,
    company: "TechInnovate",
    campaignName: "Future Gadgets",
    giftedValue: 250.0,
    applicationCloseDate: "2024-11-28",
    type: "gifted",
    status: "Unsuccessful",
  },
  {
    id: 15,
    company: "GourmetDelights",
    campaignName: "Foodie Adventures",
    giftedValue: 180.0,
    applicationCloseDate: "2024-12-18",
    type: "paid",
    status: "Invited",
  },
];

export default function ApplicationsPageComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredApplications = applications.filter(
    (app) =>
      app.campaignName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.company.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const pageCount = Math.ceil(filteredApplications.length / itemsPerPage);
  const currentApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const renderTable = (apps, showStatus = false) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Campaign Name</TableHead>
          <TableHead>Gifted Value</TableHead>
          <TableHead>Application Close Date</TableHead>
          <TableHead>Type</TableHead>
          {showStatus && <TableHead>Status</TableHead>}
        </TableRow>
      </TableHeader>
      <TableBody>
        {apps.map((app) => (
          <TableRow key={app.id}>
            <TableCell>{app.company}</TableCell>
            <TableCell>{app.campaignName}</TableCell>
            <TableCell>${app.giftedValue.toFixed(2)}</TableCell>
            <TableCell>{app.applicationCloseDate}</TableCell>
            <TableCell>
              <Badge variant={app.type === "paid" ? "default" : "secondary"}>
                {app.type}
              </Badge>
            </TableCell>
            {showStatus && <TableCell>{app.status}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button
            variant="ghost"
            className="mr-4"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-3xl font-bold">Applications</h1>
        </div>
        <div className="relative w-64">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <Tabs defaultValue="All" className="w-full">
        <TabsList>
          <TabsTrigger value="All">All</TabsTrigger>
          <TabsTrigger value="Applied">Applied</TabsTrigger>
          <TabsTrigger value="Saved">Saved</TabsTrigger>
          <TabsTrigger value="Booked">Booked</TabsTrigger>
          <TabsTrigger value="Unsuccessful">Unsuccessful</TabsTrigger>
          <TabsTrigger value="Invited">Invited</TabsTrigger>
        </TabsList>
        <TabsContent value="All">
          {currentApplications.length > 0 ? (
            renderTable(currentApplications, true)
          ) : (
            <p>No applications found.</p>
          )}
        </TabsContent>
        <TabsContent value="Applied">
          {currentApplications.filter((app) => app.status === "Applied")
            .length > 0 ? (
            renderTable(
              currentApplications.filter((app) => app.status === "Applied"),
            )
          ) : (
            <p>No applied applications found.</p>
          )}
        </TabsContent>
        <TabsContent value="Saved">
          {currentApplications.filter((app) => app.status === "Saved").length >
          0 ? (
            renderTable(
              currentApplications.filter((app) => app.status === "Saved"),
            )
          ) : (
            <p>No saved applications found.</p>
          )}
        </TabsContent>
        <TabsContent value="Booked">
          {currentApplications.filter((app) => app.status === "Booked").length >
          0 ? (
            renderTable(
              currentApplications.filter((app) => app.status === "Booked"),
            )
          ) : (
            <p>No booked applications found.</p>
          )}
        </TabsContent>
        <TabsContent value="Unsuccessful">
          {currentApplications.filter((app) => app.status === "Unsuccessful")
            .length > 0 ? (
            renderTable(
              currentApplications.filter(
                (app) => app.status === "Unsuccessful",
              ),
            )
          ) : (
            <p>No unsuccessful applications found.</p>
          )}
        </TabsContent>
        <TabsContent value="Invited">
          {currentApplications.filter((app) => app.status === "Invited")
            .length > 0 ? (
            renderTable(
              currentApplications.filter((app) => app.status === "Invited"),
            )
          ) : (
            <p>No invited applications found.</p>
          )}
        </TabsContent>
      </Tabs>
      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <span>
          Page {currentPage} of {pageCount}
        </span>
        <Button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, pageCount))
          }
          disabled={currentPage === pageCount}
        >
          Next <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
