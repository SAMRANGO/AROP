"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from '@clerk/nextjs';
import { Bell, Globe, Lock, Mail, Moon, Palette, Shield } from "lucide-react";

export default function SettingsPage() {
  const user = useUser();

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Mipangilio</h1>
        <p className="text-muted-foreground mt-2">Dhibiti mipangilio na mapendeleo ya akaunti yako</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList>
          <TabsTrigger value="account">Akaunti</TabsTrigger>
          <TabsTrigger value="notifications">Arifa</TabsTrigger>
          <TabsTrigger value="appearance">Muonekano</TabsTrigger>
          <TabsTrigger value="security">Usalama</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <div className="space-y-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Wasifu</CardTitle>
                <CardDescription>Sasisha taarifa zako binafsi</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="/avatars/user.jpg" alt="Mtumiaji" />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Badilisha Picha</Button>
                </div>
                <Separator />
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Jina</Label>
                    <Input id="name" placeholder="Jina lako" defaultValue={user?.user?.firstName ? user?.user?.firstName : ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Barua pepe</Label>
                    <Input id="email" type="email" placeholder="Barua pepe yako" defaultValue={user?.user?.emailAddresses?.[0]?.emailAddress!} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Jina la mtumiaji</Label>
                    <Input id="username" placeholder="Jina la mtumiaji" defaultValue={user?.user?.username!} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Wasifu</Label>
                  <Textarea id="bio" placeholder="Tuambie kuhusu wewe" />
                </div>
                <Button>Hifadhi Mabadiliko</Button>
              </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
              <CardHeader>
                <CardTitle>Mapendeleo</CardTitle>
                <CardDescription>Dhibiti mapendeleo ya akaunti yako</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Lugha</Label>
                    <p className="text-sm text-muted-foreground">Chagua lugha unayopendelea</p>
                  </div>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chagua lugha" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">Kiingereza</SelectItem>
                      <SelectItem value="fr">Kifaransa</SelectItem>
                      <SelectItem value="de">Kijerumani</SelectItem>
                      <SelectItem value="es">Kihispania</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Majira</Label>
                    <p className="text-sm text-muted-foreground">Weka majira yako ya eneo</p>
                  </div>
                  <Select defaultValue="est">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Chagua majira" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pst">Majira ya Pacific (PST)</SelectItem>
                      <SelectItem value="est">Majira ya Mashariki (EST)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="gmt">GMT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Arifa</CardTitle>
              <CardDescription>Dhibiti mapendeleo yako ya arifa</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Arifa za Papo kwa Papo</Label>
                      <p className="text-sm text-muted-foreground">Pokea arifa za papo kwa papo</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Arifa za Barua Pepe</Label>
                      <p className="text-sm text-muted-foreground">Pokea taarifa kupitia barua pepe</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Barua Pepe za Masoko</Label>
                      <p className="text-sm text-muted-foreground">Pokea barua pepe za masoko</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize the look and feel</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Moon className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Dark Mode</Label>
                      <p className="text-sm text-muted-foreground">Toggle dark mode</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Palette className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <Label>Theme Color</Label>
                      <p className="text-sm text-muted-foreground">Choose your theme color</p>
                    </div>
                  </div>
                  <Select defaultValue="blue">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blue">Blue</SelectItem>
                      <SelectItem value="purple">Purple</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="orange">Orange</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Security</CardTitle>
                <CardDescription>Manage your security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                    </div>
                    <Button variant="outline">Enable</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Shield className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <Label>Password</Label>
                        <p className="text-sm text-muted-foreground">Change your password</p>
                      </div>
                    </div>
                    <Button variant="outline">Update</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sessions</CardTitle>
                <CardDescription>Manage your active sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Current Session</p>
                      <p className="text-sm text-muted-foreground">Last active: Just now</p>
                    </div>
                    <Button variant="outline" className="text-destructive">Sign Out</Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Other Sessions</p>
                      <p className="text-sm text-muted-foreground">2 active sessions</p>
                    </div>
                    <Button variant="outline" className="text-destructive">Sign Out All</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
