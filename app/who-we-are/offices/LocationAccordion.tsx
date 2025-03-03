"use client"
import { Plus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const locations = [
  {
    city: "New York",
    offices: [
      {
        name: "HEADQUARTERS",
        address: "345 PARK AVENUE",
        cityState: "NEW YORK, NY 10154",
        businesses: [
          {
            name: "BLACKSTONE",
            phone: "+1 (212) 583-5000",
            fax: "+1 (212) 583-5749",
          },
          {
            name: "BLACKSTONE CREDIT",
            phone: "+1 (212) 503-2100",
            fax: "+1 (212) 503-6930",
          },
          {
            name: "STRATEGIC PARTNERS",
            phone: "+1 (212) 583-5000",
          },
        ],
      },
      {
        address: "601 LEXINGTON AVENUE",
        cityState: "NEW YORK, NY 10022",
        businesses: [
          {
            name: "BLACKSTONE",
            phone: "+1 (212) 583-5000",
            fax: "+1 (212) 583-5050",
          },
          {
            name: "BLACKSTONE TECHNOLOGY AND INNOVATIONS",
          },
        ],
      },
    ],
  },
  { city: "Cambridge", offices: [] },
  { city: "Houston", offices: [] },
  { city: "Los Angeles", offices: [] },
  { city: "Miami", offices: [] },
  { city: "San Francisco", offices: [] },
  { city: "Summit", offices: [] },
  { city: "Toronto", offices: [] },
]

export default function LocationAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {locations.map((location) => (
        <AccordionItem
          key={location.city}
          value={location.city}
          className="border-t border-[#08225a]/10 last:border-b w-full"
        >
          <AccordionTrigger className="hover:no-underline py-6 flex justify-between items-center w-full group">
            <span className="text-[#08225a] text-xl sm:text-2xl font-normal">{location.city}</span>
            
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            {location.offices.map((office, index) => (
              <div key={office.address} className={`${index > 0 ? "mt-8" : ""} space-y-6`}>
                {office.name && <div className="text-[#08225a] text-sm sm:text-base">{office.name}</div>}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-8">
                  <div className="space-y-1 lg:col-span-3">
                    <div className="text-gray-600 text-xs sm:text-sm uppercase">Address</div>
                    <div className="text-[#08225a] text-sm sm:text-base">
                      {office.address}
                      <br />
                      {office.cityState}
                    </div>
                  </div>
                  <div className="space-y-6 lg:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {office.businesses.map((business) => (
                        <div key={business.name} className="space-y-4">
                          <div className="text-[#08225a] text-sm sm:text-base font-medium">{business.name}</div>
                          {business.phone && (
                            <div className="space-y-1">
                              <div className="text-gray-600 text-xs sm:text-sm uppercase">Phone</div>
                              <div className="text-[#08225a] text-sm sm:text-base">{business.phone}</div>
                            </div>
                          )}
                          {business.fax && (
                            <div className="space-y-1">
                              <div className="text-gray-600 text-xs sm:text-sm uppercase">Fax</div>
                              <div className="text-[#08225a] text-sm sm:text-base">{business.fax}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

