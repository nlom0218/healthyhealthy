import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

type Props = {
  duration: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSkip?: () => void;
  onFinish?: () => void;
};

export const TimerDialog = ({
  duration,
  open,
  onOpenChange,
  onSkip,
  onFinish,
}: Props) => {
  const [time, setTime] = useState(duration);

  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time / 1000) % 60);
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  useEffect(() => {
    if (!open) {
      return;
    }

    setTime(duration);

    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open, duration]);

  useEffect(() => {
    if (time === 0) {
      onFinish?.();
    }
  }, [time, onFinish]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideCloseButton>
        <DialogHeader>
          <DialogTitle>휴식 시간</DialogTitle>
          <DialogDescription>
            다음 운동을 위한 준비 시간입니다
          </DialogDescription>
          <div className="text-6xl py-4 font-extrabold text-center tracking-wider text-primary tabular-nums">
            {formattedMinutes}:{formattedSeconds}
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={onSkip}>
            휴식 건너뛰기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
