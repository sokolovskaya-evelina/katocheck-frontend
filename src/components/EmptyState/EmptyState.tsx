type EmptyStateProps = {
  message?: string;
};

export function EmptyState({ message = 'Нет данных' }: EmptyStateProps) {
  return (
    <div className="text-center text-muted-foreground italic">
      {message}
    </div>
  );
}
