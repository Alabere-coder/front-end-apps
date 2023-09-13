'use client'

import { Sidebar } from "@/app/components/sidebar"
import { Table, Tabs, Button, ScrollArea, Separator, } from "@radix-ui/themes"
import { listenNowAlbums, madeForYouAlbums } from '../data/Albums'
import { AlbumArtwork } from "@/app/components/AlbumArtwork"
import { PodcastEmptyPlaceholder } from "@/app/components/podcast"
import Menu from "@/app/components/menu"

const MusicPage = () => {
  return (
    <div className=''>
      <div className=" md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar  />
              
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs.Root defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <Tabs.List>
                        <Tabs.Trigger value="music" className="relative">
                          Music
                        </Tabs.Trigger>
                        <Tabs.Trigger value="podcasts">Podcasts</Tabs.Trigger>
                        <Tabs.Trigger value="live" disabled>
                          Live
                        </Tabs.Trigger>
                      </Tabs.List>
                      <div className="ml-auto mr-4">
                        <Button>
                          {/* <PlusCircledIcon className="mr-2 h-4 w-4" /> */}
                          Add music
                        </Button>
                      </div>
                    </div>
                    <Tabs.Content
                      value="music"
                      className="border-none p-0 outline-none"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Listen Now
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Top picks for you. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))}
                          </div>
                          {/* <ScrollBar orientation="horizontal" /> */}
                        </ScrollArea>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="relative">
                        <ScrollArea>
                          <div className="flex space-x-4 pb-4">
                            {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))}
                          </div>
                          {/* <ScrollBar orientation="horizontal" /> */}
                        </ScrollArea>
                      </div>
                    </Tabs.Content>
                    <Tabs.Content
                      value="podcasts"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      {/* <PodcastEmptyPlaceholder /> */}
                      <PodcastEmptyPlaceholder />
                    </Tabs.Content>
                  </Tabs.Root>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPage

