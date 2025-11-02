import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement email sending via edge function
    // Placeholder for now
    toast({
      title: "Message received!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-neo border-foreground shadow-neo-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold flex items-center gap-2">
            Get in Touch
            <span className="text-2xl md:text-3xl">📬</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-bold">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-2 border-foreground focus:ring-2 focus:ring-primary"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-bold">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-2 border-foreground focus:ring-2 focus:ring-primary"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base font-bold">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="border-2 border-foreground focus:ring-2 focus:ring-primary min-h-[120px]"
              placeholder="Your message..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full border-2 border-foreground shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-base py-5"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
