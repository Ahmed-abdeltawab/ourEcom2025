import { LottieHandler } from "@components/feedback";
import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => JSX.Element;
  emptyMessage: string;
};

const GridList = <T extends { id?: number }>({
  emptyMessage,
  records,
  renderItem,
}: GridListProps<T>) => {
  const renderList =
    records.length > 0 ? (
      records.map((record) => (
        <Col
          xs={4}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          {renderItem(record)}
        </Col>
      ))
    ) : (
      <LottieHandler type="empty" message={emptyMessage} />
    );
  return <Row 
    className = "justify-content-center fade-in "
  >{renderList}</Row>;
};

export default GridList;
