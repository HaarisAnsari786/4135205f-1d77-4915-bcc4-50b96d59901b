import Layout from "@/components/layout/Layout";
import ServiceTemplate from "./ServiceTemplate";
import { FileText } from "lucide-react";
import businessImage from "@/assets/business-licensing.jpg";

const BusinessLicensing = () => {
  const serviceData = {
    title: "Business Licensing & Compliance",
    description: "Approvals don't come by chance; they come through deep knowledge, a clear process, and relentless follow-up.",
    icon: FileText,
    image: businessImage,
    services: [
      {
        category: "📝 Business & Trade Licenses",
        items: [
          "Shop & Establishment License",
          "Trade License / Eating House License",
          "Health Trade License",
          "Factory License",
          "Food & Drug License (FDA)",
          "FSSAI License"
        ]
      },
      {
        category: "🧾 Business Registrations",
        items: [
          "MSME / Udyam Registration",
          "Startup India / DPIIT Recognition",
          "Professional Tax (PTEC / PTRC) Registration",
          "Labour Welfare Fund Compliance"
        ]
      },
      {
        category: "💼 Company & GST Setup",
        items: [
          "Company / LLP / Partnership Registration",
          "GST Registration & Filing Support",
          "Import Export Code (IEC) Registration",
          "Barcode / BIS / ISI Licensing"
        ]
      }
    ]
  };

  return (
    <Layout>
      <ServiceTemplate {...serviceData} />
    </Layout>
  );
};

export default BusinessLicensing;