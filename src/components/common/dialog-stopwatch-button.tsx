import { StopWatch } from "../stopwtach";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

type DialogStopwatchButtonProps = {
    isView: boolean;
    onChangeView: (isView: boolean) => void;
}

export function DialogStopwatchButton({ isView, onChangeView }: DialogStopwatchButtonProps) {
    return (
        <Dialog
            open={isView}
            onOpenChange={onChangeView}
        >
            <DialogContent
                className="bg-black w-100 py-16 "
                showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className="text-white flex justify-center ">Registro de Atividade</DialogTitle>
                    <DialogDescription />
                    <StopWatch />
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
