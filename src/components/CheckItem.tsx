import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TimerDialog } from '@/components/TimerDialog';

type Props = {
  order: number;
};

export const CheckItem = ({ order }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked);
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-between">
        <span>팔굽혀펴기 20회 {order}SET</span>
        <Checkbox checked={isChecked} onClick={handleClickCheckbox} />
      </div>
      <TimerDialog
        duration={2 * 60 * 1000}
        open={isChecked && isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSkip={() => {
          setIsDialogOpen(false);
        }}
        onFinish={() => {
          setIsDialogOpen(false);
        }}
      />
    </div>
  );
};
