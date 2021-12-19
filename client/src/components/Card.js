import { RowJustifyBetween } from '../components/Layout';
import { BsBarChartLine } from 'react-icons/bs';
import { MdPointOfSale } from 'react-icons/md';
import { GiPlainCircle } from 'react-icons/gi';
import { Card, InputNumber, Tag, Tooltip } from 'antd';
import classNames from 'classnames';
import { SingleLineSkeleton } from './Skeleton';
import { Link } from 'react-router-dom';
import { currencyShort } from '../utils/string';
import { Typography } from 'antd';
import AppButton from './AppButton';
import { useRef, useState } from 'react';

const { Paragraph } = Typography;

export function CounterCard({ employeeName, name, id, active }) {
  return (
    <Card
      headStyle={{
        backgroundColor: '#F9FAFB',
      }}
      className="hover:shadow-lg-soft transition-all"
      style={
        active
          ? {
              border: 'solid 2px #1DA57A',
            }
          : {}
      }
      title={
        <span className="font-semibold flex items-center gap-2">
          <GiPlainCircle
            className={classNames('text-sm', {
              'text-green-500': active,
              'text-gray-300': !active,
            })}
            style={{ marginTop: 2 }}
          />
          {name}
        </span>
      }
      extra={
        <Link className="font-semibold" to={`./edit/${id}`}>
          Sửa
        </Link>
      }
      actions={[
        <span
          key="report"
          className="w-full flex items-center gap-2 justify-center font-semibold"
        >
          <BsBarChartLine />
          Báo cáo
        </span>,
        <span
          key="counter"
          className="w-full flex items-center gap-2 justify-center font-semibold"
        >
          <MdPointOfSale />
          Đến quầy
        </span>,
      ]}
    >
      <div className="flex flex-col gap-4">
        <RowJustifyBetween>
          <span>Trạng thái</span>
          {active ? (
            <span className="font-semibold">Đang hoạt động</span>
          ) : (
            <span className="font-semibold">Đang đóng</span>
          )}
        </RowJustifyBetween>
        <RowJustifyBetween>
          <span>Nhân viên trực</span>
          {active ? (
            <span className="font-semibold">{employeeName}</span>
          ) : (
            <SingleLineSkeleton />
          )}
        </RowJustifyBetween>
      </div>
    </Card>
  );
}

export function ProductCard() {
  const [showActions, setShowActions] = useState(false);
  return (
    <Card
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      size="small"
      className="border shadow hover:border-green-600 transition-all hover:shadow-lg"
      cover={
        <img
          alt="example"
          src="https://primedia.primark.com/s/primark/210171290_ms?locale=en-*,sl-*,*&$product-thumbnail$"
          className={classNames({
            'object-cover transition-all h-48': true,
            'lg:h-32': !showActions,
            'lg:h-20': showActions,
          })}
        />
      }
    >
      <div className="flex flex-col gap-2">
        <Paragraph
          className="leading-tight"
          style={{ margin: 0 }}
          ellipsis={{ rows: 2 }}
        >
          Tên mặt hàng đầy đủ luôn nè màu xanh Tên mặt hàng đầy đủ luôn nè màu
          xanh
        </Paragraph>
        <div className="flex flex-wrap items-center gap-1">
          <Tooltip title="Màu sắc">
            <Tag
              style={{ fontSize: 12, padding: '0 6px', margin: 0, height: 24 }}
            >
              Đen
            </Tag>
          </Tooltip>
          <Tooltip title="Kích thước">
            <Tag
              style={{ fontSize: 12, padding: '0 6px', margin: 0, height: 24 }}
            >
              2XL
            </Tag>
          </Tooltip>
        </div>
        <div className={classNames('flex items-center justify-between')}>
          <span className="text-primary">{currencyShort(25000)}</span>
          <span className="text-gray-400">{50} có sẵn</span>
        </div>
        <div
          className={classNames({
            'h-0': !showActions,
            'lg:h-12': showActions,
            'transition-all': true,
          })}
        />
        <div
          className={classNames({
            'items-center gap-2 flex lg:absolute left-3 right-3': true,
            'lg:bottom-4': showActions,
            'lg:hidden': !showActions,
          })}
        >
          <InputNumber min={1} max={10} keyboard defaultValue={1} />
          <AppButton className="flex-1" type="add">
            Thêm
          </AppButton>
        </div>
      </div>
    </Card>
  );
}
