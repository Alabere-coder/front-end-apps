import Image from "next/image"
import { PlusCircledIcon } from "@radix-ui/react-icons"
// import { cn } from "@/lib/utils"
import { ContextMenu } from "@radix-ui/themes"
import { Playlists } from "../dashboard/data/Playlists"


export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}) {
  return (
    <div className={("space-y-3", className)} {...props}>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={album.cover}
              alt={album.name}
              width={width}
              height={height}
              className={(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenu.Trigger>
        <ContextMenu.Content className="w-40">
          <ContextMenu.Item>Add to Library</ContextMenu.Item>
          <ContextMenu.Sub>
            <ContextMenu.SubTrigger>Add to Playlist</ContextMenu.SubTrigger>
            <ContextMenu.SubContent className="w-48">
              <ContextMenu.Item>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenu.Item>
              <ContextMenu.Separator />
              {Playlists.map((playlist) => (
                <ContextMenu.Item key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenu.Item>
              ))}
            </ContextMenu.SubContent>
          </ContextMenu.Sub>
          <ContextMenu.Separator />
          <ContextMenu.Item>Play Next</ContextMenu.Item>
          <ContextMenu.Item>Play Later</ContextMenu.Item>
          <ContextMenu.Item>Create Station</ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Item>Like</ContextMenu.Item>
          <ContextMenu.Item>Share</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{album.name}</h3>
        <p className="text-xs text-muted-foreground">{album.artist}</p>
      </div>
    </div>
  )
}