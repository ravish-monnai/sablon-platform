
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageSquare, ThumbsUp, ThumbsDown } from "lucide-react";
import { toast } from "sonner";

const feedbackSchema = z.object({
  feedbackType: z.enum(["suggestion", "correction", "rating"]),
  feedback: z.string().min(10, "Feedback must be at least 10 characters").max(500, "Feedback must not exceed 500 characters"),
  rating: z.enum(["positive", "negative", "neutral"]).optional(),
});

interface AIFeedbackFormProps {
  caseId: string;
}

const AIFeedbackForm: React.FC<AIFeedbackFormProps> = ({ caseId }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedbackType: "suggestion",
      feedback: "",
      rating: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof feedbackSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Feedback submitted:", values, "for case:", caseId);
      toast.success("Feedback submitted successfully");
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-lg border p-4">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-5 w-5 mr-2 text-muted-foreground" />
        <h3 className="text-lg font-medium">AI Agent Feedback</h3>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="feedbackType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="suggestion">Suggestion</SelectItem>
                    <SelectItem value="correction">Correction</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  What kind of feedback would you like to provide?
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {form.watch("feedbackType") === "rating" && (
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant={field.value === "positive" ? "default" : "outline"}
                      className={field.value === "positive" ? "bg-green-600" : ""}
                      onClick={() => field.onChange("positive")}
                    >
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Positive
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === "neutral" ? "default" : "outline"}
                      onClick={() => field.onChange("neutral")}
                    >
                      Neutral
                    </Button>
                    <Button
                      type="button"
                      variant={field.value === "negative" ? "default" : "outline"}
                      className={field.value === "negative" ? "bg-red-600" : ""}
                      onClick={() => field.onChange("negative")}
                    >
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      Negative
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please share your feedback about the AI agent's analysis..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your feedback helps improve our AI models.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Feedback"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AIFeedbackForm;
