'use client';

import { Heart } from 'lucide-react';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

export function FavoriteButton({ isFavorite }: { isFavorite: boolean }) {
  const handleClick = (): void => {
    toast("Каток удалён", {
      duration: 5000,
      action: {
        label: "Отменить",
        onClick: () => console.log("Undo"),
      },
    })
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button onClick={handleClick} variant="ghost" size="icon">
          <Heart
            className={
              isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
            }
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Добавить в избранное</TooltipContent>
    </Tooltip>
  );
}
