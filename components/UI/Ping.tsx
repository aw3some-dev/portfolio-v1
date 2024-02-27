import clsx from 'clsx';

const Ping = ({ classes, hexColorClass }: { classes: string; hexColorClass: string }) => {
  return (
    <span className={clsx('absolute flex h-3 w-3', classes)}>
      <span
        className={clsx(
          'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
          hexColorClass
        )}></span>
      <span
        className={clsx(
          'relative inline-flex rounded-full h-3 w-3',
          hexColorClass
        )}></span>
    </span>
  );
};

export default Ping;
