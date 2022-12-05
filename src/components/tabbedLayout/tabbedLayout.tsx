import classNames from "classnames";
import React from "react";
import Loader from "../common/loader/loader";
import "./tabbedLayout.sass";

export type TabbedContent = {
  label: string;
  content: JSX.Element;
};

export interface ITabbedLayoutProps {
  tabs: TabbedContent[];
  selectedTabIndex: number;
  isLoading: boolean;
  setSelectedTabIndex: (index: number) => void;
}

const TabbedLayout: React.FC<ITabbedLayoutProps> = ({
  tabs,
  selectedTabIndex,
  isLoading,
  setSelectedTabIndex,
}) => {
  const tabIndictaorPosition = (100 / tabs.length) * selectedTabIndex;

  return (
    <div className="tabbed-layout">
      <div className="content">
        {isLoading ? <Loader /> : tabs[selectedTabIndex].content}
      </div>
      <div className="tabs">
        <div
          className="tabs-indicator"
          style={{
            left: `${tabIndictaorPosition}%`,
          }}
        />
        {tabs.map((tab, index) => (
          <div
            onClick={() => setSelectedTabIndex(index)}
            key={tab.label}
            className={classNames({ selected: index === selectedTabIndex })}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedLayout;
