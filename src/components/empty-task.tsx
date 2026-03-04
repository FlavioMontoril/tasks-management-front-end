import { FolderArchiveIcon } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "./ui/empty";
import { Button } from "./ui/button";
import { SheetCreateTask } from "./sheet-create-task";
import { useState } from "react";

export function EmptyTasks() {
  const [isOpenSheet, setIsOpenSheet] = useState<boolean>(false);

  const handleChangeSheet = () => {
    setIsOpenSheet(true);
  };

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderArchiveIcon />
        </EmptyMedia>
        <EmptyTitle>Sem tarefas</EmptyTitle>
        <EmptyDescription>
          Você ainda não criou nenhuma tarefa. Comece criando a sua primeira
          tarefa.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button onClick={() => handleChangeSheet()}>Criar</Button>
      </EmptyContent>
      {/* <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button> */}

      <SheetCreateTask onOpenChange={setIsOpenSheet} isOpen={isOpenSheet} />
    </Empty>
  );
}
