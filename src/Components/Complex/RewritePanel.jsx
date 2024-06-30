import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shadcn/components/ui/tabs";

const RewritePanel = ({ panel }) => {
    return (
        <div className="w-full">
            <Tabs defaultValue="account" className="w-full">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
        </div>
    );
};

export default RewritePanel;