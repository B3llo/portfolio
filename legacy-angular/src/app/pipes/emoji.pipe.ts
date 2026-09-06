import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "emoji",
})
export class EmojiPipe implements PipeTransform {
  transform(emoji: string): unknown {
    return emoji.replace(/:fire:/g, "🔥").replace(/:rocket:/g, "🚀");
  }
}
