
interface IHeartFillIcon {
  height?: string;
  width?: string;
}

const HeartFillIcon: React.FC<IHeartFillIcon> = ({ width, height }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={width ? width : '18'} height={height ? height : '14'} viewBox='0 0 18 14' fill='none'>
      <path
        d='M17.1682 4.5219C17.1682 9.62727 9.59843 13.7597 9.27607 13.9304C9.1911 13.9761 9.09613 14 8.99965 14C8.90317 14 8.80819 13.9761 8.72323 13.9304C8.40086 13.7597 0.831055 9.62727 0.831055 4.5219C0.832406 3.32303 1.30925 2.17365 2.15698 1.32593C3.00471 0.478198 4.15409 0.00135127 5.35295 0C6.85904 0 8.17768 0.647653 8.99965 1.74239C9.82161 0.647653 11.1403 0 12.6463 0C13.8452 0.00135127 14.9946 0.478198 15.8423 1.32593C16.69 2.17365 17.1669 3.32303 17.1682 4.5219Z'
        fill='#B6020B'
      />
    </svg>
  );
};

export default HeartFillIcon;
